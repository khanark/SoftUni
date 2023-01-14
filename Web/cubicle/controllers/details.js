const express = require('express');
const { matchSelected } = require('../utils/utils');
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
  const [cube, accessories] = await Promise.all([
    req.storage.getSingleCube(req.params.id),
    req.accessory.getAccessories(),
  ]);

  const cubeAccessories = cube.accessories.map(o => o.toString());
  const availableAccessories = accessories.filter(
    a => cubeAccessories.includes(a.id.toString()) == false
  );

  res.render('attachAccessory', { cube, accessories: availableAccessories });
});

module.exports = router;
