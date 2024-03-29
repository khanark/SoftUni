const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { hasEmptyFields, parseError } = require('../util/util');
const { getAllTrips, createTrip } = require('../services/tripService');
const { getUserInfo } = require('../services/userService');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/create', isGuest(), (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    await createTrip(req.body, res.locals.user.id);
    res.redirect('/catalog');
  } catch (error) {
    const err = parseError(error);
    res.render('create', { err: err, body: req.body });
  }
});

router.get('/catalog', async (req, res) => {
  const trips = await getAllTrips();
  res.render('catalog', { trips });
});

router.get('/profile', async (req, res) => {
  const userInfo = await getUserInfo(res.locals.user.id);
  userInfo.count = res.render('profile', { userInfo });
});

module.exports = router;
