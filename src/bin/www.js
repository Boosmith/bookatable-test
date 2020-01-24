const app = require('../app');
const http = require('http');
const Maybe = require('folktale/maybe');

const { Just, Nothing } = Maybe;

const environment = process.env.NODE_ENV;

const config = require('../config');

const stage = config[environment];
const port = stage.port;

app.set('port', port);

const server = http.createServer(app);
const mainIsModule = (module, main) => main === module;

const startServerIfCommandline = (main, module, server, port) =>
  mainIsModule(main, module)
    ? Just(
        server.listen(port, () =>
          console.log(`Example app listening on port ${port}!`)
        )
      )
    : Nothing();

if (server) server.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function testMe() {
  return true;
}

module.exports = { startServerIfCommandline, testMe };

startServerIfCommandline(require.main, module, app, port);
