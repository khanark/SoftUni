const Trip = require('../models/Trip');

module.exports = {
  getAllTrips,
  createTrip,
  getSingle,
  updateTrip,
};

async function getAllTrips() {
  return Trip.find().lean();
}

async function getSingle(id) {
  return Trip.findById(id).populate('buddies creator').lean();
}

async function updateTrip(id, data) {
  await Trip.findByIdAndUpdate(id, data);
}

async function createTrip(
  { start, end, date, time, price, description, seats, image, brand },
  userId
) {
  await Trip.create({
    start,
    end,
    date,
    time,
    price,
    description,
    seats,
    image,
    brand,
    creator: userId,
  });
}
