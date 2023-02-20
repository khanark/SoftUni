const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { hasEmptyFields, parseError } = require('../util/util');
const getData = require('../middlewares/data');
const {
  updateSingle,
  deleteSingle,
  commentPhoto,
} = require('../services/dataService');
const { getUserInfo } = require('../services/userService');

router.get('/user/:id', async (req, res) => {
  const profile = await getUserInfo(req.params.id);
  res.render('profile', { profile });
});

router.get('/details/:id', getData(), (req, res) => {
  res.render('details', { title: 'Details Page' });
});

router.get('/edit/:id', getData(), isGuest(), (req, res) => {
  if (!res.locals.photo.isAuthor) {
    return res.redirect('/404');
  }
  res.render('edit', { title: 'Edit Page' });
});

router.get('/delete/:id', getData(), isGuest(), async (req, res) => {
  if (!res.locals.photo.isAuthor) {
    return res.redirect('/404');
  }
  await deleteSingle(req.params.id);
  res.redirect('/catalog');
});

router.post('/edit/:id', getData(), isGuest(), async (req, res) => {
  if (!res.locals.photo.isAuthor) {
    return res.redirect('/404');
  }
  try {
    if (hasEmptyFields(req.body)) {
      throw new Error('Missing fields');
    }
    // TODO create post edit and redirect
    await updateSingle(req.params.id, req.body);
    res.redirect(`/photo/details/${req.params.id}`);
  } catch (error) {
    const err = parseError(error);
    res.render('edit', { title: 'Edit Page', err: err, body: req.body });
  }
});

router.get('/comment/:id', getData(), isGuest(), async (req, res) => {
  if (res.locals.photo.isAuthor) {
    return res.redirect('/404');
  }
  await commentPhoto(req.params.id, res.locals.user.id, req.query);
  res.redirect(`/photo/details/${req.params.id}`);
});

module.exports = router;
