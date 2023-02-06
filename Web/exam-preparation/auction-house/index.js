const app = require('express')();
const { database, express, routes } = require('./config');

// initializing of the app
start();

async function start() {
  await database(app);
  express(app);
  routes(app);
}
