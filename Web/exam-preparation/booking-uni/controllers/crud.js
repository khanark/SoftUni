const { createHotel } = require('../services/hotelService');
const { parseError } = require('../util/utils');

const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    try {
        if (Object.values(req.body).some(val => val == '')) {
            throw new Error('Missing fields');
        }
        await createHotel(req.body, req.user.id);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('create', { errors });
    }
});

module.exports = router;
