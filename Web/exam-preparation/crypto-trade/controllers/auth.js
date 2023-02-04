const router = require('express').Router();
const { login, register } = require('../services/userService');

router.get('/login', (req, res) => {
  console.log('I am inside this function');
  res.render('login');
});

router.post('/login', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    const token = await login(req.body);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    if (req.body.password !== req.body.repass) {
      throw new Error('Passwords are not matching');
    }
    const token = await register(req.body);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = router;
