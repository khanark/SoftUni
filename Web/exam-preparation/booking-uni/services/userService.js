const User = require('../models/User');
const { hash } = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'dawd12312d12dwa';

module.exports = {
    register,
    login,
    verifyToken,
};

async function register(email, username, password) {
    const existing = await User.findOne({ username }).collation({
        locale: 'en',
        strength: 2,
    });
    if (existing) {
        throw new Error('Username already exists');
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({
        email,
        username,
        hashedPassword,
    });
    try {
        await user.save();
    } catch (error) {
        throw error;
    }
    const token = createSession(user);
    return token;
}

async function login(username, password) {}

function verifyToken(token) {}

function createSession(user) {
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    return token;
}
