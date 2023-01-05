const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const create = require('./controllers/create');
const about = require('./controllers/about');
const bodyParser = require('body-parser');

const cubesService = require('./services/cubes');
const home = require('./controllers/home');

const hbs = handlebars.create({
  extname: 'hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

// services
app.use(cubesService);

// controllers
app.use('/', home);
app.get('/about', about);
app.use('/create', create);

app.all('*', (req, res) => {
  res.render('404');
});

app.listen(3000, () => console.log('The server is listening on port 3000'));
