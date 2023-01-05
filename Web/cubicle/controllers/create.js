const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('create');
});

router.post('/', async (req, res) => {
  if (Object.values(req.body).some(v => v == '')) {
    res.sendStatus(400);
  } else {
    const data = {
      name: req.body.name.toLocaleUpperCase(),
      description: req.body.description,
      image: req.body.imageUrl,
      difficulty: Number(req.body.difficultyLevel),
    };
    await req.storage.postCube(data);
    res.redirect('/');
  }
});

module.exports = router;
