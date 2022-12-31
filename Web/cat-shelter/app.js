const express = require('express');
const app = express();
const { home } = require('./src/controllers/home');
const { deleteController } = require('./src/controllers/delete');
const handlebars = require('express-handlebars');
const edit = require('./src/controllers/edit');
const catsService = require('./data');
const create = require('./src/controllers/create');
const breed = require('./src/controllers/breed');

// handlebars file extension
const hbs = handlebars.create({
  extname: '.hbs',
});

// handlebars config
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

// routing config
app.use(catsService);
// app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));
app.use('/styles', express.static('public'));
app.use('/images', express.static('uploads'));

// actual routes
app.get('/', home);
app.route('/edit/:id').get(edit.get).post(edit.post);
app.use('/create', create);
app.get('/delete/:id', deleteController);
app.route('/cats/add-breed').get(breed.get).post(breed.post);

// default
app.all('*', (req, res) => {
  res.render('404', { layout: false });
});

app.listen(3000, () => console.log('The server is listening on port 3000'));
