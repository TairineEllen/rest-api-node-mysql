const connection = require('../infra/connection');
const moment = require('moment');

class Appointment {
  add(appointment, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(appointment.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

    const validDate = moment(data).isSameOrAfter(dataCriacao);
    const validClient = appointment.cliente.length >= 5;

    const validations = [
      {
        name: 'data',
        valid: validDate,
        message: 'Data deve ser maior ou igual à data de hoje'
      },
      {
        name: 'cliente',
        valid: validClient,
        message: 'Cliente deve ter pelo menos 5 caracteres'
      }
    ];

    const errors = validations.filter(item => !item.valid);
    if (errors.length) {
      res.status(400).send(errors);
    } else {
      const appointmentWithDate = { ...appointment, dataCriacao, data };
      const sql = 'INSERT INTO Atendimentos SET ?';

      connection.query(sql, appointmentWithDate, (error, results) => {
        if (error) {
          res.status(400).send(error);
        } else {
          res.status(201).send(results);
        };
      });
    };
  };

  list(res) {
    const sql = 'SELECT * FROM Atendimentos';

    connection.query(sql, (error, results) => {
      if (erro) {
        res.status(400).send(error);
      } else {
        res.status(200).send(results);
      };
    });
  };
};

module.exports = new Appointment;