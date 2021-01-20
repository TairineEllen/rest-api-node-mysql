const getAppointments = (req, res) => {
  res.send('Rota de atendimentos GET');
};

const createAppointments = (req, res) => {
  res.send('Rota de atendimentos POST');
};

module.exports = {
  getAppointments,
  createAppointments
};
