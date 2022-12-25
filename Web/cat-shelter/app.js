const express = require('express');
const app = express();
const { create } = require('express-handlebars');
const bodyparser = require('body-parser');
const homeView = require('./src/controllers/home');
const editView = require('./src/controllers/edit');
const createView = require('./src/controllers/create');

// handlebars file extension
const hbs = create({
    extname: '.hbs',
});

// handlebars config
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

// routing
app.use(express.urlencoded({ extended: true }));
app.use('/styles', express.static('content'));

app.use('/', homeView);
app.use('/edit', editView);
app.use('/create', createView);

app.listen(3000, () => console.log('The server is listening on port 3000'));
