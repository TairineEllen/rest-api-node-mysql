const connection = require('../infra/connection');

class Appointment {
  add(appointment) {
    const sql = 'INSERT INTO Atendimentos SET ?';

    connection.query(sql, appointment, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      };
    });
  };
};

module.exports = new Appointment;