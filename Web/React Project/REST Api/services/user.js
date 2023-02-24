const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const util = require('util');
const { userViewModel } = require('../util/util');
const jwt = {
    sign: util.promisify(jsonwebtoken.sign),
    verify: util.promisify(jsonwebtoken.verify),
};

const SECRET_KEY = 'djad123kjd';

module.exports = {
    register,
    login,
    verifyToken,
    updateUser,
    uploadUserPhoto,
    findUser,
    banUser,
    unbanUser,
    promoteUser,
    getUserInfo,
};

async function register({ email, username, password }) {
    try {
        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });
        if (existingEmail) {
            throw new Error('User already exists', { cause: 400 });
        }
        if (existingUsername) {
            throw new Error('User already exists', { cause: 400 });
        }
        if (password.length < 4) {
            throw new Error('Password should be minimum 4 characters long', {
                cause: 400,
            });
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({
            email,
            username,
            password: hashedPassword,
        });
        await user.save();
        const token = await createToken(user);
        return userViewModel(user, token);
    } catch (error) {
        throw error;
    }
}

async function login({ username, password }) {
    try {
        const existing = await User.findOne({ username });
        if (!existing) {
            throw new Error('Wrong username or password', { cause: 403 });
        }
        const isValidPass = await compare(password, existing.password);
        if (!isValidPass) {
            throw new Error('Wrong username or password', { cause: 403 });
        }
        const token = await createToken(existing);
        return userViewModel(existing, token);
    } catch (error) {
        throw error;
    }
}

async function getUserInfo(id) {
    const user = await User.findById(id);
    return userViewModel(user);
}

// returns array with all the users matching the search criteria
async function findUser({ username }) {
    const user = User.find({ username: new RegExp(username, 'i') });
    return userViewModel(user);
}

async function banUser({ username }, { reason }) {
    const user = await User.findOne({ username });
    user.isBanned.status = true;
    user.isBanned.reason = reason;
    await user.save();
    return userViewModel(user);
}

async function unbanUser({ username }) {
    const user = await User.findOne({ username });
    user.isBanned.status = false;
    delete user.isBanned.reason;
    await user.save();
    return userViewModel(user);
}

async function promoteUser(username, role) {
    const user = await User.findOne({ username });
    user.role = role;
    await user.save();
}

async function updateUser(id, data) {
    await User.findByIdAndUpdate(id, data, {
        runValidators: true,
    });
    const user = await User.findById(id);
    return userViewModel(user);
}

async function uploadUserPhoto(id, { photo }) {
    const user = await User.findById(id);
    user.photo = photo;
    await user.save();
    return userViewModel(user);
}

async function createToken({ email, username, _id, role, isBanned }) {
    const payload = {
        email,
        username,
        _id,
        role,
        isBanned,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' });
}

async function verifyToken(headers) {
    const token = headers['x-authorization'];
    if (!token) {
        throw new Error('No authorization', { cause: 401 });
    }
    const decodedToken = await jwt.verify(token, SECRET_KEY);
    const existingUser = await User.findById(decodedToken._id);
    if (!existingUser) {
        throw new Error('No authorization', { cause: 401 });
    }
    return decodedToken;
}
