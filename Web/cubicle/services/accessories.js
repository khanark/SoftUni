const Accessory = require('../models/Accessory');
const { accessoryViewModel } = require('../utils/utils');

module.exports = (req, res, next) => {
    req.accessory = {
        addAccessory,
        getAccessories,
    };
    next();
};

async function addAccessory(accessory) {
    await Accessory.create(accessory);
}

async function getAccessories() {
    const data = await Accessory.find({});
    return data.map(accessoryViewModel);
}
