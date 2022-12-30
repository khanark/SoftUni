module.exports = {
  async deleteController(req, res) {
    await req.storage.deleteCat(req.params.id);
    res.redirect('/');
  },
};
