const express = require('express');
const { errorMap } = require('../utils/utils');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    try {
        if (password !== repeatPassword) {
            throw new Error('Password missmatch');
        }
        await req.auth.register(username.trim(), password.trim());
        res.redirect('/');
    } catch (errors) {
        errors = errorMap(errors);
        res.render('register', {
            data: { username: req.body.username },
            errors,
        });
    }
});

module.exports = router;
