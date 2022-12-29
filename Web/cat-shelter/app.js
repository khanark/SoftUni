const express = require('express');
const app = express();
const { create } = require('express-handlebars');
const catsService = require('./data');
const homeView = require('./src/controllers/home');
const edit = require('./src/controllers/edit');
const createView = require('./src/controllers/create');

// handlebars file extension
const hbs = create({
  extname: '.hbs',
});

// handlebars config
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

// routing config
app.use(catsService);
// app.use(bodyParser);
app.use('/styles', express.static('content'));

// actual routes
app.use('/', homeView);
app.route('/edit/:id').get(edit.get).post(edit.post);
app.use('/create', createView);

// default
app.get('*', (req, res) => {
  res.render('404', { layout: false });
});

app.listen(3000, () => console.log('The server is listening on port 3000'));
