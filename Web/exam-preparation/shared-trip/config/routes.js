const trimmer = require('../middlewares/trimmer');
const session = require('../middlewares/session');
const { isLogged, isUser } = require('../middlewares/guards');

const authController = require('../controllers/auth');
const homeController = require('../controllers/home');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  // TODO Add more controllers and routes

  app.all('*', (req, res) => {
    res.render('404');
  });
};
