const express = require('express');
const app = express();
const port = 3000;

start();

async function start() {
  await require('./config/database')();
  app.use(express.json());
  require('./config/routes')(app);

  app.listen(port, () =>
    console.log(`The server is listening on port ${port}...`)
  );
}
