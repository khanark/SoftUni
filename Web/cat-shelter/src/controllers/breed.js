module.exports = {
  get: (req, res) => {
    res.render('breed');
  },
  post: async (req, res) => {
    const { breed } = req.body;
    await req.storage.addBreed(breed);
    res.redirect('/');
  },
};
