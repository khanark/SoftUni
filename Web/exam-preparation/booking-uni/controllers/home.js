const { isGuest, isOwner } = require('../middlewares/guards');
const { getSingle, getAll } = require('../services/hotelService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const hotels = await getAll();
    res.render('home', { hotels });
});

router.get('/details/:id', isGuest(), async (req, res) => {
    const hotel = await getSingle(req.params.id);

    hotel.isBooked = hotel.bookings
        .map(el => el._id.toString())
        .includes(req.user.id);

    hotel.isOwner = hotel.owner == req.user?.id;

    if (!hotel) {
        res.send('404 Not Found');
    }
    
    res.render('details', { hotel });
});

module.exports = router;
