const express = require('express');
const router = express.Router();

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const accessoryId = req.body.accessory;
  await req.storage.attachAccessory(id, accessoryId);
  res.redirect(`/`);
});

router.get('/:id', async (req, res) => {
  console.log(req.params.id);

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
