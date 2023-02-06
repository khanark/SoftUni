const router = require('express').Router();
const { register, login } = require('../services/userService');
const { setCookie } = require('../util/util');

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

router.post('/login', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    const token = await login(req.body);
    setCookie(res, token);
    // There is something not working here as expected
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    const token = await register(req.body);
    setCookie(res, token);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
