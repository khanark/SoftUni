const router = require('express').Router();

router.get('/details', (req, res) => {
  console.log(res.locals.auction);
  res.render('details');
});

module.exports = router;
