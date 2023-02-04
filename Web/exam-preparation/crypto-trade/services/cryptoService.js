const Crypto = require('../models/Crypto');

module.exports = {
  getAllCrypto,
  addCrypto,
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
  try {
    const coin = new Crypto({
      name,
      image,
      payment,
      price,
      description,
      owner: userId,
    });
    coin.save();
  } catch (error) {
    throw error;
  }
}
