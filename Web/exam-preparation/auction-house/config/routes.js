// controllers go here
const {
  homeController,
  authController,
  auctionController,
} = require('../controllers');
const {
  session,
  error,
  data,
  guards: { isGuest, isAuthor, isUser },
} = require('../middlewares');

module.exports = app => {
  app.use(session());

  //IMPORTANT NOTE: DO NOT TOUCH THE ORDER!

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

  // has to be last in order to get all the errors
  app.use(error());
};
