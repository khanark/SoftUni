const express = require('express');
const cookieParser = require('cookie-parser');
const authControler = require('../controllers/auth');
const homeControler = require('../controllers/home');
const crudControler = require('../controllers/crud');
const session = require('../middlewares/session');
const trim = require('../middlewares/trim');
const { isGuest } = require('../middlewares/guards');

module.exports = app => {
    // adding express middlewares
    app.use(express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session);
    app.use(trim());

    // adding routes
    app.use('/auth', authControler);
    app.use('/', homeControler);
    app.use('/home', homeControler);
    app.use('/crud', crudControler);
};
