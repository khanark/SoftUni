const User = require('../models/User');
const util = require('util');
const jsonwebtoken = require('jsonwebtoken');

const SECRET_KEY = 'duwgadb123';

const jtw = {
  sign: util.promisify(jsonwebtoken.sign),
  verify: util.promisify(jsonwebtoken.verify),
};

module.exports = {
  register,
  login,
  verifyUser,
};

async function register({ username, email, password }) {
  const user = new User({
    username,
    email,
    password,
  });
  try {
    user.save();
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }) {
  const user = await User.findOne({ email }).lean();
  try {
    if (!user) {
      throw new Error('Wrong username or password');
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw new Erorr('Wrong username or password');
    }
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function createSession({ username, email }) {
  const payload = {
    username,
    email,
  };
  const token = await jtw.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

async function verifyUser(token) {
  const decoded = await jtw.verify(token, SECRET_KEY);
  return decoded;
}
