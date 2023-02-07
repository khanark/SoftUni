const { getSingle } = require('../services/auctionService');
const { mapCategories } = require('../util/util');

module.exports = () => {
  return async (req, res, next) => {
    const auction = await getSingle(req.params.id);
    const { singleCategory, categories } = mapCategories(auction);
    auction.categories = categories;
    auction.category = singleCategory;
    if (res.locals.user) {
      auction.isAuthor = auction.author._id == req.user?.id;
      auction.hasBid = Object.values(auction.bidder)
        .map(val => val._id.toString())
        .includes(req.user.id.toString());
      // console.log(Object.values(auction.bidder).map(val => val._id.toString()));
      // console.log(req.user.id.toString());
    }
    auction.lastBidder = auction.bidder.pop();
    res.locals.auction = auction;
    next();
  };
};
