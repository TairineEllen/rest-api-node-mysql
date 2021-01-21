const connection = require('../infra/connection');
const moment = require('moment');

class Appointment {
  add(appointment, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(appointment.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
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

module.exports = new Appointment;