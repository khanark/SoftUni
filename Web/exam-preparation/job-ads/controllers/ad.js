const getData = require('../middlewares/data');
const { applyAd, deleteAd, updateAd } = require('../services/adService');
const { isLogged } = require('../middlewares/guards');
const router = require('express').Router();

router.get('/details/:id', getData(), async (req, res) => {
  res.render('details');
});

router.get('/apply/:id', getData(), isLogged(), async (req, res) => {
  const { ad } = res.locals;
  if (ad.isAuthor) {
    return res.redirect('/');
  }
  await applyAd(req.params.id, res.locals.user.id);
  res.redirect(`/ad/details/${req.params.id}`);
});

router.get('/delete/:id', getData(), isLogged(), async (req, res) => {
  const { ad } = res.locals;
  if (!ad.isAuthor) {
    return res.redirect('/');
  }
  await deleteAd(req.params.id);
  res.redirect('/catalog');
});

router.get('/edit/:id', getData(), isLogged(), (req, res) => {
  res.render('edit');
});

router.post('/edit/:id', getData(), isLogged(), async (req, res) => {
  await updateAd(req.params.id, req.body);
  res.redirect(`/ad/details/${req.params.id}`);
});

module.exports = router;
