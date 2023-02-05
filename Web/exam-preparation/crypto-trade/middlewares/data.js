const { getSingleCoin } = require('../services/cryptoService');

module.exports = () => {
  return async (req, res, next) => {
    const coin = await getSingleCoin(req.params.id);
    if (coin) {
      coin.isOwner = coin.owner == req.user?.id;
      coin.isBought = Object.values(coin.buyers)
        .map(val => val.toString())
        .includes(req.user?.id);
    }
    res.locals.coin = coin;
    next();
  };
};
