// ### DEPENDENCIES ###
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const create = require('./controllers/create');
const details = require('./controllers/details');
const about = require('./controllers/about');
const edit = require('./controllers/edit');
const deleteItem = require('./controllers/delete');
const home = require('./controllers/home');
const accessory = require('./controllers/addAccessory');
const attach = require('./controllers/attach.js');
const login = require('./controllers/login');
const register = require('./controllers/register');
const logout = require('./controllers/logout');
const { isLogged } = require('./utils/utils');
const cubeService = require('./services/cubes');
const accessoryService = require('./services/accessories');
const auth = require('./services/auth');

const initDb = require('./models');

// ### SETUP ###
const hbs = handlebars.create({
    extname: 'hbs',
});

const initializeApp = async () => {
    const app = express();

    // services
    await initDb();
    app.use(
        expressSession({
            secret: 'my secret',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: 'auto' },
        })
    );
    app.use(cubeService);
    app.use(accessoryService);

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.use(express.static('static'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(auth);

    // controllers
    app.use('/', home);
    app.get('/about', about);
    app.use('/create', isLogged(), create);
    app.use('/details', details);
    app.use('/register', register);
    app.use('/login', login);
    app.use('/logout', logout);
    app.use('/delete', isLogged(), deleteItem);
    app.use('/edit', isLogged(), edit);
    app.use('/create/accessory', isLogged(), accessory);
    app.use('/attach', isLogged(), attach);
    app.all('*', (req, res) => {
        res.render('404');
    });

    app.listen(3000, () => console.log('The server is listening on port 3000'));
};

// initializing the application
initializeApp();
