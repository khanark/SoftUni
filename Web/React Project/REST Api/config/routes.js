// All the controllers go here
const authContoller = require('../controllers/auth');
const globallErrorHandler = require('../middlewares/error');
const courseController = require('../controllers/course');

module.exports = app => {
    app.use('/users', authContoller);
    app.use('/courses', courseController);
    app.use(globallErrorHandler);
};
