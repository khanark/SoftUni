const { getSingle } = require('../services/auctionService');
const { mapCategories, mapSingleCategory } = require('../util/util');

module.exports = () => {
  return async (req, res, next) => {
    const auction = await getSingle(req.params.id);
    if (req.user) {
      auction.isLogged = Boolean(req.user);
      auction.isAuthor = auction.author._id == req.user?.id;
      auction.categories = mapCategories(auction.category);
      auction.category = mapSingleCategory(auction.category);
      auction.hasBid = Object.values(auction.bidder)
        .map(val => val._id.toString())
        .includes(req.user.id.toString());
    }
    auction.lastBidder = auction.bidder.pop();
    res.locals.auction = auction;
    next();
  };
};
