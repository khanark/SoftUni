const router = require('express').Router();

router.get('/details/:id', (req, res) => {
    res.render('details');
});

router.get('/home/profile', (req, res) => {
    res.render("profile");
});

module.exports = router;
