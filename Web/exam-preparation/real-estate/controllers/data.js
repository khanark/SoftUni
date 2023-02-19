const router = require('express').Router();
const { isGuest, isUser } = require('../middlewares/guards');
const { hasEmptyFields, parseError } = require('../util/util');
const getData = require('../middlewares/data');
const { rentAHouse, updateHouse } = require('../services/dataService');

router.get('/details/:id', getData(), (req, res) => {
  res.render('details');
});

router.get('/edit/:id', getData(), isGuest(), (req, res) => {
  if (!res.locals.house.isAuthor) {
    return res.redirect('/');
  }
  res.render('edit');
});

router.get('/delete/:id', getData(), isGuest(), async (req, res) => {
  if (!res.locals.house.isAuthor) {
    return res.redirect('/');
  }
  await deleteData(req.params.id);
  res.redirect('/catalog');
});

router.post('/edit/:id', getData(), async (req, res) => {
  if (!res.locals.house.isAuthor) {
    return res.redirect('/');
  }
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    // TODO create post edit and redirect
    console.log('I am inside update controller');

    await updateHouse(req.params.id, req.body);
    res.redirect(`/house/details/${req.params.id}`);
  } catch (error) {
    const err = parseError(error);
    res.render('edit', { err: err, body: req.body });
  }
});

router.get('/rent/:id', getData(), isGuest(), async (req, res) => {
  if (res.locals.house.isAuthor) {
    return res.redirect('/');
  }
  await rentAHouse(req.params.id, res.locals.user.id);
  res.redirect(`/house/details/${req.params.id}`);
});

module.exports = router;
