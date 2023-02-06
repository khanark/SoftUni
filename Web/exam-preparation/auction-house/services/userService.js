const User = require('../services/userService');
const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    return createSession(user);
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
    return createSession(user);
  } catch (error) {
    throw error;
  }
}

function createSession({ email, _id, firstName, lastName }) {
  const payload = {
    email,
    id: _id,
    firstName,
    lastName,
  };
  return jtw.sing(
    payload,
    SECRET_KEY,
    { expiresIn: '1h' },
    (err, token) => token
  );
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, token) => token);
}
