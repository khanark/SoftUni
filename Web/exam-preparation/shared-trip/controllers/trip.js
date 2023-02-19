const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const getData = require('../middlewares/data');
const { hasEmptyFields, parseError } = require('../util/util');
const { updateTrip, joinTrip } = require('../services/tripService');

router.get('/details/:id', getData(), async (req, res) => {
  res.render('details');
});

router.get('/edit/:id', getData(), (req, res) => {
  if (!res.locals.trip.isAuthor) {
    return res.redirect('/');
  }
  res.render('edit');
});

router.post('/edit/:id', getData(), async (req, res) => {
  if (!res.locals.trip.isAuthor) {
    return res.redirect('/');
  }
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    await updateTrip(req.params.id, req.body);
    res.redirect(`/trip/details/${req.params.id}`);
  } catch (error) {
    const err = parseError(error);
    res.render('edit', { err: err, body: req.body });
  }
});

router.get('/delete/:id', async (req, res) => {
  await deleteData(req.params.id);
  res.redirect('/catalog');
});

router.get('/join/:id', getData(), async (req, res) => {
  try {
    await joinTrip(req.params.id, res.locals.user.id);
    res.redirect(`/trip/details/${req.params.id}`);
  } catch (error) {
    const err = parseError(error);
    res.render('details', { err: err });
  }
});

module.exports = router;
