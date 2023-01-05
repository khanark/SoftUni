const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const cubes = await req.storage.getCubes(req.query);
  res.render('index', { cubes });
})

module.exports = router