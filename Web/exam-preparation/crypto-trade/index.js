const app = require('express')();
const port = 3000;

start();

async function start() {
  await require('./setup/database')();
  require('./setup/express')(app);
  require('./setup/routes')(app);
  app.listen(port, () => console.log('Server is listening on port 3000...'));
}
