module.exports = {
  async home(req, res) {
    console.log(await req.storage.allCats());
    res.locals = {
      cats: await req.storage.allCats(),
    };
    res.render('index', { layout: false });
  },
};
