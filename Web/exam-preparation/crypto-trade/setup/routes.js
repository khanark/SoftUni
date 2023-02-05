const {
  authController,
  homeController,
  cryptoController,
} = require('../controllers');
const {
  session,
  trimmer,
  error,
  getData,
  guards: { isLogged },
} = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/', homeController);
  app.use('/auth', authController);
  app.use(
    '/crypto/:id',
    getData(),
    isLogged('details'),
    cryptoController
  );
  app.all('*', (req, res) => {
    res.render('404');
  });

  app.use(error());
};
