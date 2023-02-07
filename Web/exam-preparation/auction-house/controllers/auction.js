const { placeBid, updateAuction } = require('../services/auctionService');

const router = require('express').Router();

router.get('/details', (req, res) => {
  res.render('details');
});

router.post('/bid', async (req, res, next) => {
  const { _id: auctionId } = res.locals.auction;
  try {
    await placeBid(req.user.id, auctionId, req.body);
    res.redirect(`/auction/${auctionId}/details`);
  } catch (error) {
    next(error);
  }
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

router.post('/edit', async (req, res, next) => {
  const { _id: auctionId } = res.locals.auction;
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    await updateAuction(auctionId, req.body);
    res.redirect(`/auction/${auctionId}/details`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
