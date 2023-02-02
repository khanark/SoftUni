const express = require('express');
const port = 3000;

start();

async function start() {
  const app = express();

  // loading express-handlebars config
  require('./config/express')(app);

  //loading the database
  await require('./config/database')(app);

  //loading the routes
  require('./config/routes')(app);

  app.listen(port, () =>
    console.log('The server is listening on port 3000 ...')
  );
}
