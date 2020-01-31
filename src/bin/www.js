const Maybe = require('folktale/maybe');
const http = require('http');
const app = require('../app');

const { pid } = process;

const { Just, Nothing } = Maybe;

const environment = process.env.NODE_ENV;

const config = require('../config');

const stage = config[environment];
const { port } = stage;

app.set('port', port);

const server = http.createServer(app);
const mainIsModule = (module, main) => main === module;

const startServerIfCommandline = (main, module) =>
  mainIsModule(main, module)
    ? Just(
        server.listen(port, () => {
          console.log(`Listening on port ${port}!`);
          console.log(`Started process: ${pid}`);
        })
      )
    : Nothing();

if (server)
  server.on('error', error => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

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

function testMe() {
  return true;
}

module.exports = { startServerIfCommandline, testMe };

startServerIfCommandline(require.main, module, app, port);
