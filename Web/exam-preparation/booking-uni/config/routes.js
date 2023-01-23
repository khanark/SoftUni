const express = require('express');
const cookieParser = require('cookie-parser');

module.exports = app => {
    // adding express middlewares
    app.use(express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    // adding routes
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.all('*', (req, res) => {
        res.send('404 Not Found');
    });
};
