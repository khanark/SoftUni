const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
    res.locals = {
        user: req.session.user || undefined,
    };

    req.auth = {
        register,
        login,
    };

    async function register(username, password) {
        try {
            const user = new User({
                username,
                hashedPassword: await bcrypt.hash(password, 10),
            });
            user.save();
            req.session.user = user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async function login(username, password) {
        try {
            const user = await User.findOne({ username: username });

            if (!(await bcrypt.compare(password, user.hashedPassword))) {
                throw new Error('Incorrect password.');
            }
            req.session.user = {
                id: user._id,
                username: user.username,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
    next();
};
