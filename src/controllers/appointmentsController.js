const getAppointments = (req, res) => {
  res.send('Rota de atendimentos GET');
};

const addAppointment = (req, res) => {
  res.send('Rota de atendimentos POST');
};

module.exports = {
  getAppointments,
  addAppointment
};
