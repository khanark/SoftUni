const auth = require('../controllers/auth');
const { session, trimmer, error } = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/auth', auth);

  app.use(error());
};
