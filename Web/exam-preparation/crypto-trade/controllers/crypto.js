const router = require('express').Router();
const { getSingleCoin } = require('../services/cryptoService');

router.get('/details', (req, res) => {
  // TODO make a middleware to pass the item
  res.render('details');
});

module.exports = router;
