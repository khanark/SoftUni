const port = 3000;
const app = require('express')();

// App initialization
start();

async function start() {
  require('./config/express')(app);
  await require('./config/database')(app);
  require('./config/routes')(app);
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
}
