const router = require('express').Router();
const { register } = require('../services/userService');
const { setCookie } = require('../util/util');

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res, next) => {
  try {
    setCookie(res, token);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const token = await register(req.body);
    setCookie(res, token);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
