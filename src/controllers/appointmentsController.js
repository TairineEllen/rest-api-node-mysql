const Appointment = require('../models/appointments');

const getAppointments = (req, res) => {
  Appointment.list(res);  
};

const getById = (req, res) => {
  const id = parseInt(req.params.id);
  Appointment.getById(id, res);
}

const addAppointment = (req, res) => {
  const appointment = req.body;
  Appointment.add(appointment, res);
};

module.exports = {
  getAppointments,
  getById,
  addAppointment
};
