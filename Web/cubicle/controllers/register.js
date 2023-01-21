const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  console.log(password, repeatPassword);
  try {
    if (password !== repeatPassword) {
      throw new Error('Password missmatch');
    }
    await req.auth.register(username.trim(), password.trim());
    res.redirect('/');
  } catch (error) {
    console.log(req.body.username);
    console.log(error);
    res.render('register', { data: { username: req.body.username } });
  }
});

module.exports = router;
