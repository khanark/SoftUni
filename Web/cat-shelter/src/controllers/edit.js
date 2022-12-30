module.exports = {
  get: async (req, res) => {
    const cat = await req.storage.singleCat(req.params.id);
    if (!cat.id) {
      cat.id = req.params.id;
    }
    res.render('editCat', { title: 'Update Cat Information', cat });
  },
  post: async (req, res) => {
    // !FIX: req.body doesnt return the expected values
    console.log(req.body);

    if (Object.values(req.body).some(val => val == '')) {
      res.send(400, { err: 'Please fill all the empty fields' });
    }

    const cat = {
      name: req.body.name,
      description: req.body.description,
      breed: req.body.breed,
      image: req.body.upload,
    };

    await req.storage.updateCat(req.params.id, cat);
    res.redirect('/');
  },
};
