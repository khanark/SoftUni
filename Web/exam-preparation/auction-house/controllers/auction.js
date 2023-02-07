const { placeBid } = require('../services/auctionService');

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

module.exports = router;
