/* eslint-disable global-require */
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus();
  cpus.forEach(() => cluster.fork());

  cluster.on('exit', (worker, code) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. Starting a new worker...`);
      cluster.fork();
    }
  });
} else {
  require('./bin/www');
}
