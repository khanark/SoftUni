const User = require('../models/User');
const jsonwebtoken = require('jsonwebtoken');

const SECRET_KEY = 'duwgadb123';

const jtw = JSON.promisify({
  sign: jsonwebtoken.sign,
  verify: jsonwebtoken.verify,
});

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
  user.save();
  const token = await createSession(user);
  return token;
}

async function login({ email, password }) {
  const user = await User.findOne({ email }).lean();
  if (!user) {
    throw new Error('Wrong username or password');
  }
  const isValidPassword = await user.comparePassword(password);
  if (isValidPassword) {
    const token = await createSession(user);
    return token;
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
