const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const cube = await req.storage.getSingleCube(req.params.id);
    if (cube.ownerId != req.session.user.id) {
        res.redirect('/login');
    } else {
        res.render('delete', { cube });
    }
});

router.post('/:id', async (req, res) => {
    if (!(await req.storage.deleteCube(req.params.id, req.session.user.id))) {
        res.redirect('/login');
    } else {
        res.redirect('/');
    }
});

module.exports = router;
