const Cube = require('../models/Cube');
const { verifyData } = require('../utils/utils');

const getCubes = async query => {
  let cubes = await Cube.find({});

  if (query?.search) {
    cubes = await Cube.find({
      name: { $regex: query.search, $options: 'i' },
    });
  }

  if (query?.from) {
    cubes = await Cube.find({
      difficulty: {
        $gte: +query.from,
      },
    });
  }

  if (query?.to) {
    cubes = await Cube.find({
      difficulty: {
        $lte: +query.to,
      },
    });
  }

  return cubes;
};
getCubes();

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

const createCube = async data => {
  try {
    await Cube.create(verifyData(data));
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
