const express = require('express');
const { createCat } = require('../../data');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('create');
});

router.post('/new', async (req, res) => {
  if (Object.values(req.body).some(val => val == '')) {
    res.send(400, { err: 'Please fill all the empty fields' });
  }
  const cat = {
    name: req.body.name,
    description: req.body.description,
    breed: req.body.breed,
    image: req.body.upload,
  };
  await createCat(cat);
  res.redirect('/');
});

module.exports = router;
