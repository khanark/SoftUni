const express = require('express');
const router = express.Router();
const { singleCat, updateCat } = require('../../data');

router.get('/:id', async (req, res) => {
    const cat = await singleCat(req.params.id);
    if (!cat._id) {
        cat._id = req.params.id;
    }
    res.render('editCat', { title: 'Edit Page', cat: cat });
});

router.post('/:id', async (req, res) => {
    if (Object.values(req.body).some(val => val == '')) {
        res.send(400, { err: 'Please fill all the empty fields' });
    }
    const cat = {
        name: req.body.name,
        description: req.body.description,
        breed: req.body.breed,
        image: req.body.upload,
    };
    await updateCat(req.params.id, cat);
    res.redirect('/');
});

module.exports = router;
