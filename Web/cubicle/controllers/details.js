const express = require('express');
const router = express.Router();

// router.get('/delete/:id', async (req, res) => {
//   await req.storage.deleteCube(req.params.id);
//   res.redirect('/');
// });

router.get('/:id', async (req, res) => {
  const cube = await req.storage.getSingleCube(req.params.id);
  const isOwner =
    Boolean(req.session.user?.id == cube?.ownerId) && req.session.user;
  res.render('details', { cube, isOwner });
});

module.exports = router;
