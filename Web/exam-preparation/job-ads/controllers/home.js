const { getAllAds, createAd, searchAds } = require('../services/adService');
const { parseError, hasEmptyFields } = require('../util/util');
const { isLogged } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const ads = await getAllAds({ limit: true });
  res.render('home', { ads });
});

router.get('/create', isLogged(), (req, res) => {
  res.render('create');
});

router.post('/create', isLogged(), async (req, res) => {
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    const { id: userId } = res.locals.user;
    await createAd(req.body, userId);
    res.redirect('/catalog');
  } catch (error) {
    const errMsg = parseError(error);
    res.render('create', { err: errMsg, body: req.body });
  }
});

router.get('/catalog', async (req, res) => {
  const ads = await getAllAds();
  res.render('catalog', { ads });
});

router.get('/search', (req, res) => {
  res.render('search');
});

router.post('/search', async (req, res) => {
  const ads = await searchAds(req.body);
  ads.isCliked = true;
  res.render('search', { ads });
});

module.exports = router;
