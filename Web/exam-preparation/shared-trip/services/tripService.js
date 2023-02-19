const Trip = require('../models/Trip');
const User = require('../models/User');

module.exports = {
  getAllTrips,
  createTrip,
  getSingle,
  updateTrip,
  joinTrip,
};

async function getAllTrips() {
  return Trip.find().lean();
}

async function getSingle(id) {
  return Trip.findById(id)
    .populate('buddies', ['email'])
    .populate('creator', ['email'])
    .lean();
}

async function updateTrip(id, data) {
  await Trip.findByIdAndUpdate(id, data);
}

async function joinTrip(tripId, user) {
  const trip = await Trip.findById(tripId);
  if (
    Object.values(trip.buddies)
      .map(val => val.email)
      .includes(user.email)
  ) {
    // TODO Finish this
  }
  trip.buddies.push(user.id);
  await trip.save();
}

async function createTrip(
  { start, end, date, time, price, description, seats, image, brand },
  userId
) {
  const trip = new Trip({
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
  await trip.save();
  const user = await User.findById(userId);
  user.tripsHistory.push(trip);
  await user.save();
}
