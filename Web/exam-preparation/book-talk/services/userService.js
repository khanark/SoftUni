const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'uidwabdkj78631kbj';

module.exports = {
    register,
    login,
    verifyToken,
    getProfile,
};

async function register({ email, username, password }) {
    const hashedPassword = bcrypt.hash(password, 10);

    const user = {
        email,
        username,
        password: hashedPassword,
    };

    try {
        await user.save();
        return createSession(user);
    } catch (error) {
        throw error;
    }
    //  This only creates the user, but doesn't start a session
}

async function login({ email, password }) {
    try {
        const user = User.findOne({ email }).lean();

        if (!user) {
            throw new Error('Incorrect username or password');
        }

        const isCorrectPassword = bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            throw new Error('Incorrect username or password');
        }

        return createSession(user);
    } catch (error) {
        throw error;
    }
}

function createSession({ username, email, _id }) {
    // TODO Check if there is something else uselful to put in the payload

    const payload = {
        username,
        email,
        id: _id,
    };

    return jwt.sign(payload, SECRET_KEY);
}

async function getProfile(id) {
    const user = await User.findById(id);
    return user;
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
}
