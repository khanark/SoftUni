// ### DEPENDENCIES ###
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const create = require('./controllers/create');
const details = require('./controllers/details');
const about = require('./controllers/about');
const edit = require('./controllers/edit');
const home = require('./controllers/home');
const accessory = require('./controllers/addAccessory');
const attach = require('./controllers/attach.js'); // needs to be used
const cubeService = require('./services/cubes');
const accessoryService = require('./services/accessories');

const initDb = require('./models');

// ### SETUP ###
const hbs = handlebars.create({
  extname: 'hbs',
});

const initializeApp = async () => {
  const app = express();

  // services
  await initDb();
  app.use(cubeService);
  app.use(accessoryService);

  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
  app.use(express.static('static'));
  app.use(bodyParser.urlencoded({ extended: true }));

  // controllers
  app.use('/', home);
  app.get('/about', about);
  app.use('/create', create);
  app.use('/details', details);
  app.post('/edit/:id', edit);
  app.use('/create/accessory', accessory);
  app.post('/details/attach/:id', attach);
  app.all('*', (req, res) => {
    res.render('404');
  });

  app.listen(3000, () => console.log('The server is listening on port 3000'));
};

// initializing the application
initializeApp();
