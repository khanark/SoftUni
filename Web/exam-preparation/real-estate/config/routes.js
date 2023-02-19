const trimmer = require('../middlewares/trimmer');
const session = require('../middlewares/session');

const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const dataController = require('../controllers/data');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/house', dataController);
  app.all('*', (req, res) => {
    res.render('404');
  });
  // TODO Add more controllers and routes
};
