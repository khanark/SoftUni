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

const deleteCube = async (id, ownerId) => {
    const existing = await Cube.findById(id);
    if (existing.ownerId != ownerId) {
        return false;
    }
    await Cube.findByIdAndRemove(id);
    return true;
};

const updateCube = async (id, cube, ownerId) => {
    const existing = await Cube.findById(id);
    if (existing.ownerId != ownerId) {
        return false;
    }

    existing.name = cube.name;
    existing.imageUrl = cube.imageUrl;
    existing.description = cube.description;
    existing.difficulty = cube.difficulty;
    existing.accessories = cube.accessories;

    existing.save();
    return true;
    // await Cube.findByIdAndUpdate(id, verifyData(data));
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

const attachAccessory = async (carId, accessoryId, ownerId) => {
    const cube = await Cube.findById(carId);
    if (cube.ownerId != ownerId) {
        return false;
    }
    cube.accessories.push(accessoryId);
    cube.save();
    return true;
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
