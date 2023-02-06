const { getSingle } = require('../services/auctionService');

module.exports = () => {
  return async (req, res, next) => {
    console.log(req.params.id);
    const auction = await getSingle(req.params.id);
    res.locals.auction = auction;
    next();
  };
};
