const express = require('express');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');

module.exports = app => {
  app.use(express.urlencoded({ extended: false }));
  app.use('/static', express.static('static'));
  app.use(cookieParser());

  const hbs = handlebars.create({
    extname: 'hbs',
  });

  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');
};
