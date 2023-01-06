module.exports = {
  async home(req, res) {
    res.render('index', {
      layout: false,
      cats: await req.storage.allCats(req.query),
    });
  },
};
