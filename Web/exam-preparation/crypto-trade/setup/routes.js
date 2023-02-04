const {
  authController,
  homeController,
  cryptoController,
} = require('../controllers');
const { session, trimmer, error } = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/crypto/:id', cryptoController);

  app.use(error());
};
