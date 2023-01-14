module.exports = async (req, res) => {
  const id = req.params.id
  const accessoryId = req.body.accessory
  await req.storage.attachAccessory(id, accessoryId)
  res.redirect(`/`)
};
