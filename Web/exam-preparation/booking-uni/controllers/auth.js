const { register, login, verifyToken } = require('../services/userService');
const router = require('express').Router();

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
    } catch (errors) {
        res.render('register', { body: { username }, errors });
    }
});
