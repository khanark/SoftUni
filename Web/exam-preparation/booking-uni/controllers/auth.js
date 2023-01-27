const { register, login } = require('../services/userService');
const { parseError } = require('../util/utils');
const validator = require('validator');
const router = require('express').Router();

router.get('/profile', (req, res) => {
    res.render('profile', { body: req.user });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res, next) => {
    const { email, username, password, rePassword } = req.body;
    try {
        if (email == '' || username == '' || password == '') {
            throw new Error('Missing fields');
        }
        if (password !== rePassword) {
            throw new Error("Passwords don't match");
        }
        if (!validator.isEmail(email)) {
            throw new Error('Invalid email adress');
        }
        if (password.length < 5) {
            throw new Error('Password must be at least 5 characters long');
        }
        //TODO Check if register creates user session and where it redirects
        const token = await register(email, username, password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('register', { body: req.body, errors });
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

//login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username == '' || password == '') {
            throw new Error('Missing fields');
        }
        //TODO Check where login redirects
        const token = await login(username, password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('login', { body: { username }, errors });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;
