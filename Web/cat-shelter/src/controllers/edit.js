const express = require('express');
const router = express.Router();
const { singleCat, updateCat } = require('../../data');

router.get('/:id', async (req, res) => {
  const cat = await singleCat(req.params.id);
  if (!cat._id) {
    cat._id = req.params.id;
  }
  res.render('editCat', { title: 'Update Cat Information', cat });
});

router.post('/:id', async (req, res) => {
  console.log(req.body);
});

module.exports = router;