const {
    createHotel,
    getSingle,
    updateHotel,
    deleteSingle,
} = require('../services/hotelService');
const { bookHotel } = require('../services/hotelService');
const { getUserByIdAndBook } = require('../services/userService');
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

    if (hotel.owner != req.user?.id) {
        res.redirect('/auth/login');
    }

    res.render('edit', { hotel });
});

router.post('/edit/:id', async (req, res) => {
    const hotel = await getSingle(req.params.id);

    try {
        if (Object.values(req.body).some(val => val == '')) {
            throw new Error('Missing fields');
        }

        if (hotel.owner != req.user?.id) {
            res.redirect('/auth/login');
        }

        await updateHotel(req.body, req.params.id);

        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        const errors = parseError(error);
        res.render('edit', { hotel, errors });
    }
});

router.get('/book/:id', async (req, res) => {
    const hotel = await getSingle(req.params.id);
    try {
        if (
            hotel.bookings.map(el => el._id.toString()).includes(req.user?.id)
        ) {
            hotel.isBooked = true;
            throw new Error('You already booked the hotel');
        }

        if (hotel.owner == req.user?.id) {
            hotel.isOwner = true;
            throw new Error('Cannot book your own hotel');
        }
        await bookHotel(req.params.id, req.user.id);

        await getUserByIdAndBook(req.user.id, req.params.id);

        res.redirect(`/home/details/${req.params.id}`);
    } catch (error) {
        const errors = parseError(error);
        res.render('details', {
            hotel,
            errors,
        });
    }
});

router.get('/delete/:id', async (req, res) => {
    const hotel = await getSingle(req.params.id);

    if (hotel.owner != req.user?.id) {
        return res.redirect('/auth/login');
    }

    await deleteSingle(req.params.id);

    res.redirect('/');
});

module.exports = router;
