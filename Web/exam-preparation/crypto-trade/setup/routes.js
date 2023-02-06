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
  guards: { isLogged, isOwner },
} = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/auth', authController);
  app.use(
    '/crypto/:id',
    getData(),
    isOwner('details', 'buy'),
    isLogged('details'),
    cryptoController
  );
  app.use('/', isLogged('', 'search', 'catalog'), homeController);
  app.all('*', (req, res) => {
    res.render('404');
  });

  app.use(error());
};
