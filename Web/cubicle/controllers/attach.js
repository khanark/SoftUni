const express = require('express');
const router = express.Router();

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const accessoryId = req.body.accessory;
  if (
    !(await req.storage.attachAccessory(id, accessoryId, req.session.user.id))
  ) {
    res.redirect('/login');
  } else {
    await req.storage.attachAccessory(id, accessoryId, req.session.user.id);
    res.redirect(`/`);
  }
});

router.get('/:id', async (req, res) => {
  const [cube, accessories] = await Promise.all([
    req.storage.getSingleCube(req.params.id),
    req.accessory.getAccessories(),
  ]);

  if (cube.ownerId != req.session.user.id) {
    return res.redirect('/login');
  }

  const cubeAccessories = cube.accessories.map(o => o.toString());
  const availableAccessories = accessories.filter(
    a => cubeAccessories.includes(a.id.toString()) == false
  );

  res.render('attachAccessory', { cube, accessories: availableAccessories });
});

module.exports = router;
