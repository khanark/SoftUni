const {
  getBooks,
  createBook,
  getUserBooks,
} = require('../services/bookService');
const { getProfile } = require('../services/userService');

const router = require('express').Router();

router.get('/profile', async (req, res) => {
  const user = await getProfile(req.user?.id);
  const books = await getUserBooks(req.user?.id);
  res.render('profile', { user, books });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res, next) => {
  try {
    await createBook(req.body, req.user.id);
    res.redirect('/home/catalog');
  } catch (error) {
    next(error);
  }
});

router.get('/catalog', async (req, res) => {
  const books = await getBooks();
  res.render('catalog', { books });
});

module.exports = router;
