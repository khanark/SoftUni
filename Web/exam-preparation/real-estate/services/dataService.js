// IMPORTANT: always name the function that returns a single data log to "getSingle"
const House = require('../models/House');
module.exports = {
  getAll,
  getSingle,
  deleteSingle,
  createHouse,
  updateHouse,
  rentAHouse,
  searchHouses,
};

async function getAll() {
  return House.find().lean();
}

async function getSingle(id) {
  return House.findById(id).populate('rentedAHome owner').lean();
}

async function deleteSingle(id) {
  return House.findByIdAndRemove(id);
}

async function createHouse(
  { name, type, year, city, image, description, availablePieces },
  userId
) {
  try {
    const house = new House({
      name,
      city,
      type,
      year,
      image,
      description,
      availablePieces,
      owner: userId,
    });
    await house.save();
  } catch (error) {
    throw error;
  }
}

async function searchHouses({ type }) {
  return !type ? [] : House.find({ type: new RegExp(type, 'i') }).lean();
}

async function updateHouse(id, data) {
  return House.findByIdAndUpdate(id, data, { runValidators: true });
}

async function rentAHouse(houseId, userId) {
  const house = await House.findById(houseId);
  house.availablePieces--;
  house.rentedAHome.push(userId);
  await house.save();
}
