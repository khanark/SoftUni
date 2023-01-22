const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        await req.auth.login(username, password);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
