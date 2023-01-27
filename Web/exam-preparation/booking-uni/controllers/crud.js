const {
    createHotel,
    getSingle,
    updateHotel,
    deleteSingle,
} = require('../services/hotelService');
const { bookHotel } = require('../services/userService');
const { isOwner } = require('../middlewares/guards');
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

router.get('/edit/:id', isOwner(getSingle), async (req, res) => {
    const hotel = await getSingle(req.params.id);
    res.render('edit', { hotel });
});

router.post('/edit/:id', isOwner(getSingle), async (req, res) => {
    try {
        if (Object.values(req.body).some(val => val == '')) {
            throw new Error('Missing fields');
        }
        await updateHotel(req.body, req.params.id);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        const errors = parseError(error);
        const errorData = {
            name: req.body.hotel,
            city: req.body.city,
            imageUrl: req.body.imgUrl,
            freeRooms: req.body['free-rooms'],
        };
        res.render('edit', { errorData, errors });
    }
});

router.get('/book/:id', async (req, res) => {
    try {
        const hotel = await getSingle(req.params.id);
        if (hotel.owner == req.user.id) {
            console.log('You cannot book a room in your own hotel.');
            return res.redirect(`/details/${req.params.id}`);
        }
        await bookHotel(req.params.id, req.user.id);
        req.user.bookedHotels.push(hotel);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

router.get('/delete/:id', isOwner(getSingle), async (req, res) => {
    await deleteSingle(req.params.id);
    res.redirect('/');
});

module.exports = router;
