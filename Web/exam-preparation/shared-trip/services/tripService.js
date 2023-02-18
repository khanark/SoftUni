const Trip = require('../models/Trip');

module.exports = {
  getAllTrips,
  createTrip,
};

async function getAllTrips() {
  return Trip.find().lean();
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
