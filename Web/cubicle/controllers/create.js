const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', async (req, res) => {
    try {
        await req.storage.createCube(req.body, req.session);
        res.redirect('/');
    } catch (error) {
        console.log('Im  in the error log =>');
        res.redirect('/');
    }
});

module.exports = router;
