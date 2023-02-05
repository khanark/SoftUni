const router = require('express').Router();
const {
  getSingleCoin,
  updateCoin,
  deleteCoin,
  buyCoin,
} = require('../services/cryptoService');

router.get('/details', (req, res) => {
  res.render('details');
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

router.post('/edit', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    const { _id } = res.locals.coin;
    await updateCoin(_id, req.body);
    res.redirect(`/crypto/${_id}/details`);
  } catch (error) {
    next(error);
  }
});

router.get('/delete', async (req, res, next) => {
  const { _id } = res.locals.coin;
  try {
    await deleteCoin(_id);
    res.redirect(`/home/catalog`);
  } catch (error) {
    next(error);
  }
});

router.get('/buy', async (req, res, next) => {
  try {
    const { _id: coinId } = res.locals.coin;
    const userId = req.user?.id;
    await buyCoin(coinId, userId);
    res.redirect(`/crypto/${coinId}/details`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
