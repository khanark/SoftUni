const handlebars = require('express-handlebars');
const express = require('express');
const cookieParser = require('cookie-parser');

module.exports = app => {
  const hbs = handlebars.create({
    extname: '.hbs',
  });
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');

  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('static'));
  app.use(cookieParser());
};
