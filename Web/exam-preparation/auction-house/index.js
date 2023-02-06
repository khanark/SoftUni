const app = require('express')();
const { database, express, routes } = require('./config');

const port = 3000;

// initializing of the app
start();

async function start() {
  await database(app);
  express(app);
  routes(app);

  app.listen(port, () =>
    console.log(`The server is litening on port ${port}...`)
  );
}
