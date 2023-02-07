const { getSingle } = require('../services/auctionService');

module.exports = () => {
  return async (req, res, next) => {
    const auction = await getSingle(req.params.id);
    if (req.user) {
      auction.isLogged = Boolean(req.user);
      auction.isAuthor = auction.author._id == req.user?.id;
      auction.hasBid = Object.values(auction.bidder)
        .map(val => val._id.toString())
        .includes(req.user.id.toString());
    }
    auction.lastBidder = auction.bidder.pop();
    console.log(auction);
    res.locals.auction = auction;
    next();
  };
};
