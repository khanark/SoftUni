const { register, login, verifyToken } = require('../services/userService');
const { parseError } = require('../util/utils');
const router = require('express').Router();

//register
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { email, username, password, repass } = req.body;
    try {
        if (email == '' || username == '' || password == '') {
            throw new Error('Missing fields');
        }
        if (password !== repass) {
            throw new Error("Passwords don't match");
        }
        const token = await register(email, username, password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('register', { body: { username }, errors });
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
        const token = await login(username, password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('login', { body: { username }, errors });
    }
});
