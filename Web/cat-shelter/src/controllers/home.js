module.exports = {
  async home(req, res) {
    res.locals = {
      cats: await req.storage.allCats(req.query),
    };
    res.render('index', { layout: false });
  },
};
