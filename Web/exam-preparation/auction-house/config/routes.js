// controllers go here
const { homeController, authController } = require('../controllers');
const { session, error } = require('../middlewares');

module.exports = app => {
  app.use(session());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.all('*', (req, res) => {
    res.render('404');
  });

  // has to be last in order to get all the errors
  app.use(error());
};
