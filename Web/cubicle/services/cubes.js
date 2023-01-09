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

const getSingleCube = async id => {
  try {
    return await Cube.findById(id);
  } catch (err) {
    console.log(err)
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

module.exports = async (req, res, next) => {
  req.storage = {
    getCubes,
    getSingleCube,
    deleteCube,
    updateCube,
    createCube,
  };
  next();
};
