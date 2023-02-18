const trimmer = require('../middlewares/trimmer');
const session = require('../middlewares/session');
const { isLogged, isUser } = require('../middlewares/guards');

const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const tripController = require('../controllers/trip');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/trip', tripController);
  // TODO Add more controllers and routes

  app.all('*', (req, res) => {
    res.render('404');
  });
};
