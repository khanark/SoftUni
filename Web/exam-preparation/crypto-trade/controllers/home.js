const { getAllCrypto, addCrypto } = require('../services/cryptoService');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const coins = await getAllCrypto();
  res.render('home', { coins });
});

router.get('/home/create', async (req, res) => {
  res.render('create');
});

router.get('/home/catalog', async (req, res) => {
  const coins = await getAllCrypto();
  res.render('catalog', { coins });
});

router.post('/home/create', async (req, res, next) => {
  try {
    if (Object.values(req.body).some(val => val == '')) {
      throw new Error('Missing fields');
    }
    await addCrypto(req.body, req.user.id);
    res.redirect('/home/catalog');
  } catch (error) {
    next(error);
  }
});

router.get('/home/search', (req, res) => {
  res.render('search');
});

router.post('/home/search', async (req, res, next) => {
  try {
    const coins = await getAllCrypto(req.body);
    res.render('search', { coins, search: req.body.search });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
