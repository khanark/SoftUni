const express = require('express');
const { matchDiff } = require('../utils/utils');
const router = express.Router();

router.get('/', async (req, res) => {
  const cubes = await req.storage.getCubes(req.query);
  cubes.forEach(c => (c.difficulty = matchDiff(c.difficulty)));

  res.render('index', { cubes });
});

module.exports = router;
