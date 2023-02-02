const { auth, general, home, book } = require('../controllers');
const { guards, session, trimmer, error, preload } = require('../middlewares');

module.exports = app => {
  app.use(session);
  app.use(trimmer);

  app.use('/', home);
  app.use('/home', guards.isLogged('catalog'), general);
  app.use('/auth', auth);
  app.use(
    '/book/:id',
    preload(),
    guards.isLogged('details'),
    guards.isOwner('details'),
    book
  );
  app.all('*', (req, res) => {
    res.render('404');
  });

  // global error handler has to be always last
  app.use(error);
};
