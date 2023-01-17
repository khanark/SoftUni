const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  const { username, password, repass } = req.body;
  if (password !== repass) {
    console.log('Password missmatch');
  }
  await req.auth.register(username, password);
  res.redirect('/');
});

module.exports = router;
