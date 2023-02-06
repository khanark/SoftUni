const { createAuction, getAll } = require('../services/auctionService');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const auctions = await getAll();
  res.render('home', { auctions });
});

router.get('/browse', async (req, res) => {
  const auctions = await getAll();
  res.render('browse', { auctions });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    await createAuction(req.user.id, req.body);
    res.redirect('/browse');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
