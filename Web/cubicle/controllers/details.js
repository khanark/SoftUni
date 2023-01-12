const express = require('express');
const { dataViewModel } = require('../utils/utils');
const router = express.Router();

router.get('/delete/:id', async (req, res) => {
  await req.storage.deleteCube(req.params.id);
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  res.render('details', { cube });
});

router.get('/edit/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  cube.options = matchSelected(cube.difficulty);
  res.render('edit', { cube });
});

router.get('/attach/:id', async (req, res) => {
  const cube = dataViewModel(await req.storage.getSingleCube(req.params.id));
  // console.log(dataViewModel(cube));
  // [] get the corresponding cube and pass it to the template
  res.render('attachAccessory', { cube });
});

module.exports = router;
