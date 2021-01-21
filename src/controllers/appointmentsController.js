const Appointment = require('../models/appointments');

const getAppointments = (req, res) => {
  res.send('Rota de atendimentos GET');
};

const addAppointment = (req, res) => {
  const appointment = req.body;
  Appointment.add(appointment, res);
};

module.exports = {
  getAppointments,
  addAppointment
};
