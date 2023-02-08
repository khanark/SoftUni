const {
  homeController,
  authController,
  auctionController,
} = require('../controllers');
const {
  session,
  error,
  data,
  trimmer,
  guards: { isGuest, isAuthor, isUser },
} = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  //IMPORTANT NOTE: do NOT touch the order of the routes
  // complexity of the routes in mind

  app.use(
    '/auction/:id',
    isGuest('details'),
    data(),
    isAuthor('details'),
    auctionController
  );
  app.use('/auth', isUser('logout'), authController);
  app.use('/', isGuest('', 'browse'), homeController);

  app.all('*', (req, res) => {
    res.render('404');
  });

  //IMPORTANT NOTE: global error has to be last
  app.use(error());
};
