// All the controllers go here
const authContoller = require('../controllers/auth');
const globallErrorHandler = require('../middlewares/error');

module.exports = app => {
  app.use('/users', authContoller);
  app.use(globallErrorHandler);
};
