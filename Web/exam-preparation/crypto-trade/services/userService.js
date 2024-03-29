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
  const existingUsername = await User.findOne({ username });
  const existingEmail = await User.findOne({ email });
  try {
    if (existingEmail || existingUsername) {
      throw new Error('User already exists');
    }
    await user.save();
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }) {
  const existing = await User.findOne({ email }).lean();
  try {
    if (!existing) {
      throw new Error('Wrong username or password');
    }
    const user = new User(existing);
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw new Error('Wrong username or password');
    }
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function createSession({ username, email, _id }) {
  const payload = {
    id: _id,
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
