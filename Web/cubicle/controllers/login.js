const express = require('express');
const { errorMap } = require('../utils/utils');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        await req.auth.login(username, password);
        res.redirect('/');
    } catch (errors) {
        errors = errorMap(errors);
        res.render('login', { errors });
    }
});

module.exports = router;
