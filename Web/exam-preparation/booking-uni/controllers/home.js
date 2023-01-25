const { getSingle, getAll } = require('../services/hotelService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const hotels = await getAll();
    console.log(hotels);
    res.render('home', { hotels });
});

router.get('/details/:id', async (req, res) => {
    const hotel = await getSingle(req.params.id);
    res.render('details', { hotel });
});

module.exports = router;
