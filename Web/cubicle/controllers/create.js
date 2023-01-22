const express = require('express');
const { errorMap } = require('../utils/utils');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', async (req, res) => {
    try {
        await req.storage.createCube(req.body, req.session);
        res.redirect('/');
    } catch (errors) {
        errors = errorMap(errors);
        res.render('create', { errors });
    }
});

module.exports = router;
