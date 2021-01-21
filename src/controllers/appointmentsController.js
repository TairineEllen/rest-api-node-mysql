const Appointment = require('../models/appointments');

const getAppointments = (req, res) => {
  Appointment.list(res);  
};

const addAppointment = (req, res) => {
  const appointment = req.body;
  Appointment.add(appointment, res);
};

module.exports = {
  getAppointments,
  addAppointment
};
