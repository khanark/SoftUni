const { getSingleAd } = require('../services/adService');

module.exports = () => {
  return async (req, res, next) => {
    const data = await getSingleAd(req.params.id);
    const userId = res.locals.user?.id;
    data.isAuthor = data.author._id == userId;
    data.isApplied = Object.values(data.appliedUsers)
      .map(val => val._id.toString())
      .some(val => val == userId);
    res.locals.ad = data;
    next();
  };
};
