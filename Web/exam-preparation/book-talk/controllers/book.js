const {
  wishToRead,
  updateBook,
  deleteBook,
} = require('../services/bookService');
// const { preload, guards } = require('../middlewares');

const router = require('express').Router();

router.get('/wish', async (req, res) => {
  const id = res.locals.getId();
  await wishToRead(id, req.user.id);
  res.redirect(`/book/${id}/details`);
});

router.get('/details', async (req, res) => {
  res.render('details');
});

router.get('/edit', async (req, res) => {
  res.render('edit');
});

router.post('/edit', async (req, res, next) => {
  const {
    data: { _id },
  } = res.locals;
  try {
    await updateBook(_id, req.body);
    res.redirect(`/book/${_id}/details`);
  } catch (error) {
    next(error);
  }
});

router.get('/delete', async (req, res) => {
  try {
    await deleteBook(res.locals.getId());
    res.redirect('/catalog');
  } catch (error) {
    throw error;
  }
});

module.exports = router;
