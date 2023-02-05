const router = require('express').Router();
const { getSingleCoin, updateCoin } = require('../services/cryptoService');

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
    console.log(req.body);
    const { _id } = res.locals.coin;
    await updateCoin(_id, req.body);
    res.redirect(`/crypto/${_id}/details`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
