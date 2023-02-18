const Ad = require('../models/Ad');
const User = require('../models/User');

module.exports = {
  getAllAds,
  getSingleAd,
  deleteAd,
  createAd,
  applyAd,
  updateAd,
  searchAds,
};

async function getAllAds(options) {
  let ads;
  if (options?.limit) {
    ads = await Ad.find().limit(3).lean();
  } else {
    ads = await Ad.find().lean();
  }
  return ads;
}

async function searchAds({ email }) {
  const user = await User.findOne({
    email: new RegExp(email, 'i'),
  })
    .populate('myAds')
    .lean();
  return user.myAds;
}

async function getSingleAd(id) {
  const ad = await Ad.findById(id).populate('appliedUsers author').lean();
  return ad;
}

async function deleteAd(id) {
  await Ad.findByIdAndRemove(id);
}

async function createAd(
  { headline, location, companyName, companyDescription },
  userId
) {
  try {
    const user = await User.findById(userId);
    const ad = new Ad({
      headline,
      location,
      companyName,
      companyDescription,
      author: userId,
    });
    user.myAds.push(ad);
    await User.findByIdAndUpdate(userId);
    await user.save();
    await ad.save();
  } catch (error) {
    throw error;
  }
}

async function updateAd(id, data) {
  await Ad.findByIdAndUpdate(id, data, { runValidators: true });
}
async function applyAd(adId, userId) {
  try {
    const ad = await Ad.findById(adId);
    ad.appliedUsers.push(userId);
    await ad.save();
  } catch (error) {
    throw error;
  }
}
