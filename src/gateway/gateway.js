const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const chalk = require('chalk');
const { version } = require('../../package.json');
const {
  addProduct,
} = require('./functions');
const {
  Accounting,
  Catering,
  Delivery,
  Ecommerce,
  Inventory,
} = require('../../build/Release/addon');
const defaultDB = { products: [], orders: [], inventory: [], accounting: {} };
const adapter = new FileSync('../db.json');
const db = low(adapter);

(async () => {
  if (cluster.isMaster) {
    console.log(chalk.bold.blue(`Process Management System v${version} initializing...`));
    console.log(chalk.bold.blue('Setup database default registers...'));
    db.defaults(defaultDB).write();
    console.log(chalk.bold.green(`Gateway running in PID: ${process.pid}`));
    console.log(chalk.bold.blue(`Found ${numCPUs} cpu cores, invoking workers...`));

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });

    console.log(Accounting());
    console.log(Catering());
    console.log(Delivery());
    console.log(Ecommerce());
    console.log(Inventory());
  } else {
    console.log(chalk.bold.green(`New Worker running on PID: ${process.pid}`));
  }
})();
