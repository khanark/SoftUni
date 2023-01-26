const { getSingle, getAll } = require('../services/hotelService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const hotels = await getAll();
    res.render('home', { hotels });
});

router.get('/details/:id', async (req, res) => {
    const hotel = await getSingle(req.params.id);
    const isOwner = hotel.owner == req.user.id;
    const isBooked = req.user.bookedHotels
        .map(h => h._id)
        .includes(hotel._id.toString());
    if (!hotel) {
        res.send('404 Not Found');
    }

    res.render('details', { hotel, isOwner, isBooked });
});

module.exports = router;
