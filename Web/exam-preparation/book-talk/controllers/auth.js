const { register, login, verifyToken } = require('../services/userService');
const { parseError } = require('../util/util');
const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('register', async (req, res) => {
    try {
        const token = await register(req.body);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('register', {
            body: {
                email: req.body.email,
                username: req.body.username,
            },
            errors,
        });
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const token = await login(req.body);
        res.cookie('token', token);
    } catch (error) {
        const errors = parseError(error);
        res.render('register', {
            body: {
                email: req.body.email,
            },
            errors,
        });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie();
    res.redirect('/');
});

module.exports = router;
