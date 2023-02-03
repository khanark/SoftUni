const auth = require('../controllers/auth');
const { session, trimmer } = require('../middlewares');

module.exports = app => {
  app.use(session());
  app.use(trimmer());

  app.use('/auth', auth);
};
