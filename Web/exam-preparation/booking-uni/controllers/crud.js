const {
    createHotel,
    getSingle,
    updateHotel,
} = require('../services/hotelService');
const { bookHotel } = require('../services/userService');
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

router.get('/edit/:id', async (req, res) => {
    const hotel = await getSingle(req.params.id);
    res.render('edit', { hotel });
});

router.post('/edit/:id', async (req, res) => {
    try {
        if (Object.values(req.body).some(val => val == '')) {
            throw new Error('Missing fields');
        }
        await updateHotel(req.body, req.params.id);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        const errors = parseError(error);
        res.render('create', { errors });
    }
});

router.get('/book/:id', async (req, res) => {
    try {
        await bookHotel(req.params.id, req.user.id);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
