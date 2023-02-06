// controllers go here
const { homeController, authController } = require('../controllers');

module.exports = app => {
  app.use('/', homeController);
  app.use('/auth', authController);
};
