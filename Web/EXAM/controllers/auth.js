const { login, register } = require('../services/userService');
const { isUser } = require('../middlewares/guards');
const { parseError, hasEmptyFields } = require('../util/util');
const router = require('express').Router();

router.get('/login', isUser(), (req, res) => {
  res.render('login', { title: 'Login Page' });
});

router.get('/register', isUser(), (req, res) => {
  res.render('register', { title: 'Register Page' });
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

router.post('/register', isUser(), async (req, res) => {
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    const { password, repass } = req.body;

    // TODO Check password length validation
    const passLength = 4;

    if (password.length < passLength) {
      throw new Error(
        `Password should be a minimum of ${passLength} characters long`
      );
    }
    if (password !== repass) {
      throw new Error('Password missmatch');
    }
    const token = await register(req.body);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    const errMsg = parseError(error);
    res.render('register', { err: errMsg, body: req.body });
  }
});

router.post('/login', isUser(), async (req, res) => {
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
