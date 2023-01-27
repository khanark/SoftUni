const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'dawd12312d12dwa';

module.exports = {
    register,
    login,
    verifyToken,
    bookHotel,
};

//TODO Check for the unique fields and if there are multiple set the index for all of them

async function register(email, username, password) {
    const existing1 = await User.findOne({ username }).collation({
        locale: 'en',
        strength: 2,
    });
    const existing2 = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2,
    });
    if (existing1) {
        throw new Error('User with that username already exists');
    }
    if (existing2) {
        throw new Error('User with that email already exists');
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

async function login(username, password) {
    const existing = await User.findOne({ username }).collation({
        locale: 'en',
        strength: 2,
    }).populate("bookedHotels");
    if (!existing) {
        throw new Error('Wrong username or password');
    }
    if (!(await compare(password, existing.hashedPassword))) {
        throw new Error('Wrong username or password');
    }
    const token = createSession(existing);
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
}

function createSession(user) {
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        bookedHotels: user.bookedHotels,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    return token;
}

async function bookHotel(hotelId, userId) {
    try {
        const user = await User.findById(userId);
        user.bookedHotels.push(hotelId);
        await user.save();
    } catch (error) {
        throw error;
    }
}
