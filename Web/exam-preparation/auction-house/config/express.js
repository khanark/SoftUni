const express = require('express');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');

module.exports = app => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('static'));
  app.use(cookieParser());

  const hbs = handlebars.create({
    extname: 'hbs',
  });

  app.engine('hbs', hbs.engine);
  app.use('view engine', 'hbs');
};
