const router = require('express').Router();

router.get('/details', (req, res) => {
  res.render('details');
});

module.exports = router;
