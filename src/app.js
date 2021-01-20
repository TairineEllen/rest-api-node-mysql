const express = require('express');
const app = express();
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

const appointments = require('./routes/appointmentsRoute');

connection.connect(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Conectado com sucesso');
    Tables.init(connection);
    
  }
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Alow-Headers',
    'Origin', 'X-Request-With', 'Content-Type', 'Accept'
  );
  console.info('Nova requisição realizada');
  next();
});

app.use('/atendimentos', appointments);

module.exports = app;