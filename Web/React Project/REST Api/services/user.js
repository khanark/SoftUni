const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const fs = require('fs/promises');
const jsonwebtoken = require('jsonwebtoken');
const util = require('util');
const { isValidObjectId } = require('mongoose');
const { userViewModel, validateUser } = require('../util/util');
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
        if (!email || !username || !password) {
            throw new Error('Missing fields', { cause: 400 });
        }
        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });
        if (existingEmail) {
            throw new Error('User already exists', { cause: 409 });
        }
        if (existingUsername) {
            throw new Error('User already exists', { cause: 409 });
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
        if (!username || !password) {
            throw new Error('Missing fields', { cause: 400 });
        }
        const existing = await User.findOne({ username });
        if (!existing) {
            throw new Error('Wrong username or password', { cause: 401 });
        }
        const isValidPass = await compare(password, existing.password);
        if (!isValidPass) {
            throw new Error('Wrong username or password', { cause: 401 });
        }
        const token = await createToken(existing);
        return userViewModel(existing, token);
    } catch (error) {
        throw error;
    }
}

async function getUserInfo(id) {
    if (!isValidObjectId(id)) {
        throw new Error("User doesn't exist in the database", { cause: 404 });
    }
    const user = await User.findById(id).lean();
    return validateUser(user);
}

// returns array with all the users matching the search criteria
async function findUser({ username }) {
    const user = await User.find({
        username: new RegExp(username, 'i'),
    }).lean();
    return validateUser(user);
}

async function banUser({ username }, { reason }) {
    const user = validateUser(await User.findOne({ username }));
    user.isBanned.status = true;
    user.isBanned.reason = reason;
    await user.save();
    return userViewModel(user);
}

async function unbanUser({ username }) {
    const user = validateUser(await User.findOne({ username }));
    user.isBanned.status = false;
    delete user.isBanned.reason;
    await user.save();
    return userViewModel(user);
}

async function promoteUser({ username }, { role }) {
    const user = validateUser(await User.findOne({ username }));
    user.role = role;
    await user.save();
    return userViewModel(user);
}

async function updateUser(id, data) {
    await User.findByIdAndUpdate(id, data, {
        runValidators: true,
    });
    const user = await User.findById(id);
    return validateUser(user);
}

async function uploadUserPhoto(id, photo) {
    const user = validateUser(await User.findById(id));
    user.photo = `/public/user_photos/${photo}`;
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
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });
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