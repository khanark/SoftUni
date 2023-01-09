module.exports = async (req, res) => {
  const data = {
    name: req.body.name.toLocaleUpperCase(),
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    difficulty: Number(req.body.difficultyLevel),
  };
  await req.storage.updateCube(req.params.id, data);
  res.redirect(`/details/${req.params.id}`);
};
