const trimmer = require('../middlewares/trimmer');
const session = require('../middlewares/session');
const { isLogged, isAuthor } = require('../middlewares/guards');

const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const adController = require('../controllers/ad');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/ad', adController);

  app.all('*', (req, res) => {
    res.render('404');
  });
  // TODO Add more controllers and routes
};
