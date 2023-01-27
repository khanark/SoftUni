const { isGuest, isOwner } = require('../middlewares/guards');
const { getSingle, getAll } = require('../services/hotelService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const hotels = await getAll();
    res.render('home', { hotels });
});

router.get('/details/:id', isGuest(), isOwner(getSingle), async (req, res) => {
    const hotel = await getSingle(req.params.id);
    const isBooked = req.user?.bookedHotels
        .map(h => h._id)
        .includes(hotel._id.toString());
    if (!hotel) {
        res.send('404 Not Found');
    }
    res.render('details', { hotel, isBooked });
});

module.exports = router;
