const express = require('express');
const router = express.Router();
const { matchSelected } = require('../utils/utils');

router.get('/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  if (cube.ownerId != req.session.user.id) {
    res.redirect('/login');
  } else {
    cube.options = matchSelected(cube.difficulty);
    res.render('edit', { cube });
  }
});

router.post('/:id', async (req, res) => {
  if (
    !(await req.storage.updateCube(
      req.params.id,
      req.body,
      req.session.user.id
    ))
  ) {
    res.redirect('/login');
  } else {
    await req.storage.updateCube(req.params.id, req.body, req.session.user.id);
    res.redirect(`/details/${req.params.id}`);
  }
});

module.exports = router;
