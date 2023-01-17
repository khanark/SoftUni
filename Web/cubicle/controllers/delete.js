const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  res.render('delete', { cube });
});

router.post('/:id', async (req, res) => {
  await req.storage.deleteCube(req.params.id);
  res.redirect('/');
});

module.exports = router;
