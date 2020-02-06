#!/usr/bin/env node

const http = require('http');
const app = require('../app');

const environment = process.env.NODE_ENV;

const config = require('../config');

const stage = config[environment];
const { port } = stage;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Started process ${process.pid}`);
  console.log(`Server listening on port ${port}`);
});

server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
