const { getSingle } = require('../services/dataService');

module.exports = () => {
  return async (req, res, next) => {
    const data = await getSingle(req.params.id);
    const userId = res.locals.user?.id;
    data.isAuthor = data.owner._id == userId;
    data.isRented = Object.values(data.rentedAHome)
      .map(val => val._id.toString())
      .some(val => val == userId);
    data.renters = Object.values(data.rentedAHome)
      .map(val => val.username)
      .join(', ');
    res.locals.house = data;
    next();
  };
};
