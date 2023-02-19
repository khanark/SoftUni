const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const util = require('util');
const jwt = {
  sign: util.promisify(jsonwebtoken.sign),
  verify: util.promisify(jsonwebtoken.verify),
};

const SECRET_KEY = 'dod21qwb9125dgh';

module.exports = {
  register,
  login,
  verifyToken,
};

// TODO Check if register creates new session after the user registers

// TODO check what fields does a user needs to fill to get a registration

async function register({ fullname, username, password }) {
  try {
    const existing = await User.findOne({ fullname });
    if (existing) {
      throw new Error('User already exists');
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({
      fullname,
      username,
      password: hashedPassword,
    });
    await user.save();
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function login({ username, password }) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Wrong username or password');
    }
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Wrong username or password');
    }
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function createSession({ fullname, username, _id }) {
  const payload = {
    fullname,
    username,
    id: _id,
  };
  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' });
  return token;
}

async function verifyToken(token) {
  const decoded = await jwt.verify(token, SECRET_KEY);
  return decoded;
}
