const { register, login } = require('../services/userService');
const { setCookieAndRedirect } = require('../util/util');
const router = require('express').Router();

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    if (req.body.password.length < 3) {
      throw new Error('Invalid password: must be atleast 3 characters long');
    }
    if (req.body.password != req.body.repass) {
      throw new Error("Passwords don't match");
    }
    const token = await register(req.body);
    setCookieAndRedirect('/', res, token);
  } catch (error) {
    next(error);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    const token = await login(req.body);
    setCookieAndRedirect('/', res, token);
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = router;
