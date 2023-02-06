const { createAuction } = require('../services/auctionService');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/browse', (req, res) => {
  res.render('browse');
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res, next) => {
  try {
    await createAuction(req.body);
    res.redirect('/browse');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
