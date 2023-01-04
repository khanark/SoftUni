module.exports = async (req, res) => {
  const cubes = await req.storage.getCubes();
  res.render('index', { cubes });
};
