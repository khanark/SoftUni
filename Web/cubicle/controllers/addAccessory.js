const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('createAccessory');
});

router.post('/', async (req, res) => {
  const accessory = {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  };
  await req.accessory.addAccessory(accessory);
  res.redirect('/');
});

module.exports = router;
