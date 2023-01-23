const User = require('../models/User');
const { hash } = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'dawd12312d12dwa';

module.exports = {
    register,
    login,
};

async function register(email, username, password) {
    if (email == '' || username == '' || password == '') {
        throw new Error('missing fields');
    }

    const existing = await User.findOne({ username });

    if (existing != undefined) {
        throw new Error('Username already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        username,
        hashedPassword,
    });

    await user.save();
    const token = createSession(user);
    res.cookie("token", token, secretKey)
}

async function login(username, password) {}

function verifyToken(token) {
    
}

function createSession(user) {
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = jwt.sign(payload, secretKey);
    return token;
}
