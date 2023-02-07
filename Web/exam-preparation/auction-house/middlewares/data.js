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
      auction.user = true;
      auction.hasBid = Object.values(auction.bidder)
        .map(val => val._id.toString())
        .includes(req.user.id.toString());
      // line 17 doesn't return anything [investigate] (if )
      console.log(Object.values(auction.bidder).map(val => val._id.toString()));
      // line 18 returns the string of the user - it is correct
    }
    auction.lastBidder = auction.bidder.pop();
    res.locals.auction = auction;
    next();
  };
};
