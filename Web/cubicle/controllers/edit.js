const express = require('express');
const router = express.Router();
const { matchSelected } = require('../utils/utils');

router.get('/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  cube.options = matchSelected(cube.difficulty);
  res.render('edit', { cube });
});

router.post('/:id', async (req, res) => {
  const data = {
    name: req.body.name.toLocaleUpperCase(),
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    difficulty: Number(req.body.difficultyLevel),
  };
  await req.storage.updateCube(req.params.id, data);
  res.redirect(`/details/${req.params.id}`);
});

module.exports = router;
