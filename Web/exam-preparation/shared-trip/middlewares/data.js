// TODO Change the service name for the data middleware
const serviceName = 'tripService';
const { getSingle } = require(`../services/${serviceName}`);

module.exports = () => {
  return async (req, res, next) => {
    const data = await getSingle(req.params.id);
    const userId = res.locals.user?.id;
    data.isAuthor = data.creator._id == userId;
    data.availableSeats = data.seats - data.buddies.length;
    data.hasJoined = Object.values(data.buddies)
      .map(val => val._id.toString())
      .some(val => val == userId);
    res.locals.trip = data;
    next();
  };
};
