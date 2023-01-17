const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('create');
});

router.post('/', async (req, res) => {
  if (Object.values(req.body).some(v => v == '')) {
    res.sendStatus(400);
  } else {
    await req.storage.createCube(req.body, req.session);
    res.redirect('/');
  }
});

module.exports = router;
