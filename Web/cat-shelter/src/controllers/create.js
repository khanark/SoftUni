module.exports = {
  get:
    ('/',
    (req, res) => {
      res.render('create', { title: 'Create New Cat' });
    }),
  post:
    ('/new',
    async (req, res) => {
      if (Object.values(req.body).some(val => val == '')) {
        res.send(400, { err: 'Please fill all the empty fields' });
      }
      const cat = {
        name: req.body.name,
        description: req.body.description,
        breed: req.body.breed,
        image: req.body.upload,
      };
      await req.storage.createCat(cat);
      // this was the old way of doing it, now the same function is hooked onto the req obj
      // await createCat(cat);
      res.redirect('/');
    }),
};

module.exports = router;
