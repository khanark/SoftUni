const {
  authController,
  homeController,
  cryptoController,
} = require('../controllers');
const { session, trimmer, error, getData } = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/crypto/:id', getData(), cryptoController);

  app.use(error());
};
