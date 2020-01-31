/* eslint-disable global-require */
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus();

  cpus.forEach(() => cluster.fork());
} else {
  require('./bin/www');
}
