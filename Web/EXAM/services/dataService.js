// IMPORTANT: always name the function that returns a single data log to "getSingle"
const Photo = require('../models/Photo');
const User = require('../models/User');

module.exports = {
  getAll,
  deleteSingle,
  getSingle,
  createSingle,
  updateSingle,
  commentPhoto,
};

// TODO Do not forget to lean the documents

async function getAll() {
  return Photo.find().populate('owner').lean();
}

async function deleteSingle(id) {
  return Photo.findByIdAndDelete(id);
}

async function getSingle(id) {
  return Photo.findById(id).populate('owner').lean();
}

async function createSingle(
  { name, age, image, description, location },
  userId
) {
  const photo = new Photo({
    name,
    age,
    image,
    description,
    location,
    owner: userId,
  });
  const user = await User.findById(userId);
  user.myPhotos.push(photo);
  await user.save();
  await photo.save();
}

async function updateSingle(id, data) {
  // TODO Do not forget to use validators: true
  return Photo.findByIdAndUpdate(id, data, { runValidators: true });
}

async function commentPhoto(photoId, userID, { comment }) {
  const photo = await Photo.findById(photoId);
  const existing = await User.findById(userID);
  const newComment = {
    id: existing._id,
    username: existing.username,
    comment: comment,
  };
  photo.commentList.push(newComment);
  await photo.save();
}
