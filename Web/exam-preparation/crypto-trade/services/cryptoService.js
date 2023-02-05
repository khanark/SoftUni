const Crypto = require('../models/Crypto');

module.exports = {
  getAllCrypto,
  addCrypto,
  getSingleCoin,
  updateCoin,
  deleteCoin,
};

async function getAllCrypto(query) {
  const options = {};
  if (query?.search) {
    options.name = query.search;
  }
  if (query?.payment) {
    options.payment = query.payment;
  }
  const data = await Crypto.find(options).lean();
  return data;
}

async function addCrypto({ name, image, price, description, payment }, userId) {
  console.log(userId);
  try {
    const coin = new Crypto({
      name,
      image,
      payment,
      price,
      description,
      owner: userId,
    });
    console.log(coin);
    await coin.save();
  } catch (error) {
    throw error;
  }
}

async function getSingleCoin(id) {
  const coin = await Crypto.findById(id).lean();
  return coin;
}

async function updateCoin(id, { name, image, price, description, payment }) {
  try {
    const existing = await Crypto.findById(id);
    existing.name = name;
    existing.image = image;
    existing.price = price;
    existing.description = description;
    existing.payment = payment;
    await existing.save();
  } catch (error) {
    throw error;
  }
}

async function deleteCoin(id) {
  try {
    await Crypto.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
}

