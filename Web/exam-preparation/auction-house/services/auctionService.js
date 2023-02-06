const Auction = require('../models/Auction');

module.exports = {
  getAll,
  deleteSingle,
  getSingle,
  updateAuction,
  createAuction,
  placeBid,
};

async function getAll() {
  const data = await Auction.find().lean();
  return data;
}

async function getSingle(id) {
  const data = await Auction.findById(id).lean();
}

async function deleteSingle(id) {
  await Auction.findByIdAndRemove(id);
}

async function createAuction(
  id,
  { title, category, image, price, description }
) {
  try {
    const auction = new Auction({
      title,
      category,
      image,
      description,
      price,
      author: id,
    });
    await auction.save();
  } catch (error) {
    throw error;
  }
}

async function updateAuction(
  id,
  { title, category, image, price, description }
) {
  try {
    const existing = this.getSingle(id);
    existing.title = title;
    existing.category = category;
    existing.image = image;
    existing.price = Number(price);
    existing.description = description;
    await existing.save();
  } catch (error) {
    throw error;
  }
}

async function placeBid(userId, auctionId) {
  try {
    const auction = this.getSingle(auctionId);
    auction.bidder.push(userId);
    auction.save();
  } catch (error) {
    throw error;
  }
}
