const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/create', isGuest(), (req, res) => {
  res.render('create');
});

router.get('/catalog', (req, res) => {
  res.render('catalog');
});

module.exports = router;
