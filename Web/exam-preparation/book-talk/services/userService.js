const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'uidwabdkj78631kbj';

module.exports = {
  register,
  login,
  verifyToken,
  addToWishList,
  getProfile,
};

async function register({ email, username, password }) {
  const hashedPassword = await hash(password, 10);
  const user = new User({
    email,
    username,
    password: hashedPassword,
  });
  try {
    await user.save();
    return createSession(user);
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }) {
  try {
    const user = await User.findOne({ email }).lean();
    if (!user) {
      throw new Error('Incorrect username or password');
    }
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new Error('Incorrect username or password');
    }
    return createSession(user);
  } catch (error) {
    throw error;
  }
}

function createSession({ username, email, _id }) {
  const payload = {
    username,
    email,
    id: _id,
  };
  return jwt.sign(payload, SECRET_KEY);
}

async function getProfile(id) {
  const user = await User.findById(id).lean();
  return user;
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

async function addToWishList(userId, bookId) {
  try {
    const user = await User.findById(userId);
    user.wishList.push(bookId);
  } catch (error) {
    throw error;
  }
}
