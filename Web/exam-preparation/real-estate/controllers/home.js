const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { hasEmptyFields, parseError } = require('../util/util');
const {
  getAll,
  createHouse,
  searchHouses,
} = require('../services/dataService');

router.get('/', async (req, res) => {
  // TODO Check if something needs to be passed to the home page
  const houses = await getAll();
  res.render('home', { title: 'Home Page', houses });
});

router.get('/create', isGuest(), (req, res) => {
  res.render('create', { title: 'Create listing' });
});

router.post('/create', isGuest(), async (req, res) => {
  // TODO Crete post logic
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    await createHouse(req.body, res.locals.user.id);
    res.redirect('/catalog');
  } catch (error) {
    const err = parseError(error);
    res.render('create', { title: 'Create listing', err: err, body: req.body });
  }
});

router.get('/catalog', async (req, res) => {
  const houses = await getAll();
  res.render('catalog', { title: 'Catalog', houses });
});

router.get('/search', (req, res) => {
  res.render('search', { title: 'Search house' });
});

router.post('/search', async (req, res) => {
  const houses = await searchHouses(req.body);
  res.render('search', { title: 'Search house', houses, body: req.body });
});

module.exports = router;
