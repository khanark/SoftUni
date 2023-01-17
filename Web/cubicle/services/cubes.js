const Cube = require('../models/Cube');
const { verifyData } = require('../utils/utils');

const getCubes = async query => {
  const options = {};

  if (query?.search) {
    options.name = new RegExp(query.search, 'i');
  }

  if (query?.from) {
    options.difficulty = { $gte: Number(query.from) };
  }

  if (query?.to) {
    options.difficulty = { $lte: Number(query.to) };
  }

  return Cube.find(options);
};

const getSingleCube = async id => {
  try {
    const cube = await Cube.findById(id);
    cube.populate('accessories', 'name description imageUrl');
    return cube;
  } catch (err) {
    console.log(err);
  }
};

const deleteCube = async id => {
  await Cube.findByIdAndRemove(id);
};

const updateCube = async (id, data) => {
  await Cube.findByIdAndUpdate(id, verifyData(data));
};

const createCube = async (data, session) => {
  try {
    const cube = new Cube({
      name: data.name.toLocaleUpperCase(),
      description: data.description,
      imageUrl: data.imageUrl,
      difficulty: Number(data.difficultyLevel),
      ownerId: session.user.id,
    });
    await cube.save();
  } catch (err) {
    console.log(err);
  }
};

const attachAccessory = async (carId, accessoryId) => {
  const cube = await Cube.findById(carId);
  cube.accessories.push(accessoryId);
  cube.save();
};

module.exports = async (req, res, next) => {
  req.storage = {
    getCubes,
    getSingleCube,
    deleteCube,
    updateCube,
    createCube,
    attachAccessory,
  };
  next();
};
