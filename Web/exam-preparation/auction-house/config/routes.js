// controllers go here
const { homeController } = require('../controllers');

module.exports = app => {
  app.use('/', homeController);
};
