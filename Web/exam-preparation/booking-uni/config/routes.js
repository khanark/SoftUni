const express = require('express');
const cookieParser = require('cookie-parser');
const authControler = require('../controllers/auth');
const session = require('../middlewares/session');
const trim = require('../middlewares/trim');

module.exports = app => {
    // adding express middlewares
    app.use(express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session());
    app.use(trim());

    // adding routes
    app.use('/auth', authControler);
};
