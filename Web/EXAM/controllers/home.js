const router = require('express').Router();
const { hasEmptyFields, parseError } = require('../util/util');
const { isGuest } = require('../middlewares/guards');
const { createSingle, getAll } = require('../services/dataService');
const { getUserInfo } = require('../services/userService');

router.get('/', (req, res) => {
  // TODO Check if something needs to be passed to the home page
  res.render('home', { title: 'Home Page' });
});

router.get('/create', isGuest(), (req, res) => {
  res.render('create', { title: 'Create Page' });
});

router.post('/create', isGuest(), async (req, res) => {
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    // TODO Crete post logic
    await createSingle(req.body, res.locals.user.id);
    res.redirect('/catalog');
  } catch (error) {
    const err = parseError(error);
    res.render('create', { title: 'Create Page', body: req.body, err: err });
  }
});

router.get('/catalog', async (req, res) => {
  const photos = await getAll();
  res.render('catalog', { title: 'Catalog Page', photos });
});

router.get('/profile', isGuest(), async (req, res) => {
  const profile = await getUserInfo(res.locals.user.id);
  res.render('profile', { title: 'Profile Page', profile });
});

module.exports = router;
