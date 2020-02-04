/* eslint-disable global-require */
const cluster = require('cluster');
// const os = require('os');

if (cluster.isMaster) {
  console.log(`Master pid: ${process.pid}`);
  // const cpus = os.cpus();
  // cpus.forEach(() => cluster.fork());
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();

  cluster.on('exit', (worker, code) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. Starting a new worker...`);
      cluster.fork();
    }
  });

  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);

    const restartWorker = workerIndex => {
      const worker = workers[workerIndex];
      if (!worker) return;

      worker.on('exit', () => {
        if (!worker.exitedAfterDisconnect) return;
        console.log(`Exited worker process ${worker.process.pid}`);
        cluster.fork().on('listening', () => {
          restartWorker(workerIndex + 1);
        });
      });
      worker.kill();
    };
    restartWorker(0);
  });
} else {
  require('./bin/www');
}
