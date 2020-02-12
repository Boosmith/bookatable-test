// const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const api = require('./api');
const search = require('./search');
const { swaggerUi, swaggerSpec } = require('./utils/swagger');

const app = express();

require('./db');

app.use(cors());
app.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get('/api/swagger.json', function(req, res) {
  res.setHeader('Content-type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', api);
app.use('/search', search);

app.use((err, req, res) => {
  console.log(err);
  res.status(err.statusCode);
  res.json(err.message);
});

module.exports = app;
