const express = require('express');
const { matchDiff, matchSelected } = require('../utils/utils');
const router = express.Router();

router.get('/delete/:id', async (req, res) => {
  await req.storage.deleteCube(req.params.id);
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  const difficulty = matchDiff(cube.difficulty);
  cube.difficulty = difficulty;
  res.render('details', { cube });
});

router.get('/edit/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  cube.options = matchSelected(cube.difficulty);
  res.render('edit', { cube });
});

module.exports = router;
