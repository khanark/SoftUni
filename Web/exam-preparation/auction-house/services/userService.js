const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const util = require('util');

const jwt = {
  sign: util.promisify(jsonwebtoken.sign),
  verify: util.promisify(jsonwebtoken.verify),
};

const SECRET_KEY = 'dhauwdh123';

module.exports = {
  register,
  login,
  verifyToken,
};

async function register({ email, password, firstName, lastName }) {
  try {
    if (password.length < 5) {
      throw new Error('Password should be atleast 5 characters long');
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await user.save();
    const token = await createSession(user);
    return token;
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }) {
  try {
    const user = await User.findOne({ email });
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

async function createSession({ email, _id, firstName, lastName }) {
  const payload = {
    email,
    id: _id,
    firstName,
    lastName,
  };
  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

async function verifyToken(token) {
  const existing = await jwt.verify(token, SECRET_KEY);
  return existing;
}
