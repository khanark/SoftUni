const Book = require('../models/Book');

module.exports = {
  getBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  createBook,
  wishToRead,
  getUserBooks,
};

async function getBooks() {
  try {
    const books = await Book.find().lean();
    return books;
  } catch (error) {
    throw error;
  }
}

async function getSingleBook(id) {
  try {
    const book = await Book.findById(id).populate('wishList').lean();
    return book;
  } catch (error) {
    throw error;
  }
}

async function deleteBook(id) {
  try {
    await Book.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
}

async function updateBook(id, { title, author, genre, stars, image, review }) {
  try {
    const existing = await Book.findById(id);
    existing.title = title;
    existing.author = author;
    existing.genre = genre;
    existing.stars = stars;
    existing.review = review;
    existing.image = image;
    await existing.save();
  } catch (error) {
    throw error;
  }
}

async function createBook(
  { title, author, genre, stars, image, review },
  userId
) {
  try {
    const book = new Book({
      title,
      author,
      genre,
      stars,
      image,
      review,
      owner: userId,
    });
    console.log(book);
    await book.save();
  } catch (error) {
    throw error;
  }
}

async function wishToRead(bookId, userId) {
  try {
    const book = await Book.findById(bookId);
    book.wishList.push(userId);
    await book.save();
  } catch (error) {
    throw error;
  }
}

async function getUserBooks(userId) {
  const books = await Book.find({ owner: userId }).lean();
  return books;
}
