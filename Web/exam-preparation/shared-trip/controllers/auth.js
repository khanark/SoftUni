const { login, register } = require('../services/userService');
const { parseError, hasEmptyFields } = require('../util/util');
const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

router.post('/register', async (req, res) => {
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    const { password, repass } = req.body;
    if (password !== repass) {
      throw new Error('Password missmatch');
    }
    if (password.length < 4) {
      throw new Error('Password should be minimum 4 characters long');
    }
    const token = await register(req.body);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    const errMsg = parseError(error);
    res.render('register', { err: errMsg, body: req.body });
  }
});

router.post('/login', async (req, res) => {
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    const token = await login(req.body);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    const errMsg = parseError(error);
    res.render('login', { err: errMsg, body: req.body });
  }
});

module.exports = router;
