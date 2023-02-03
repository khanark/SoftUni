const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {

});

router.get('/logout', (req, res) => {
  res.send('Logout');
});

module.exports = router;
