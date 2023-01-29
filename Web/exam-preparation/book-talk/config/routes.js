const express = require('express');
const cookieParser = require('cookie-parser');

//routes
const generalController = require('../controllers/general');
const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const session = require('../middlewares/session');
const trimmer = require('../middlewares/trimmer');
const { isLogged } = require('../middlewares/guards');

module.exports = app => {
    // express middlewares
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('static'));
    app.use(cookieParser());
    app.use(session());
    app.use(trimmer());

    app.use('/', homeController);
    app.use('/home', generalController);
    app.use('/auth', isLogged(), authController);
};
