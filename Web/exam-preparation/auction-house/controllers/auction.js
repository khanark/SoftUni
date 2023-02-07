const { Error } = require('mongoose');
const {
  placeBid,
  updateAuction,
  deleteSingle,
  closeSingle,
} = require('../services/auctionService');

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

router.get('/delete', async (req, res, next) => {
  try {
    await deleteSingle(res.locals.auction._id);
    res.redirect('/browse');
  } catch (error) {
    next(error);
  }
});

router.get('/close', async (req, res, next) => {
  try {
    await closeSingle(res.locals.auction._id);
    res.redirect('/browse/closed');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
