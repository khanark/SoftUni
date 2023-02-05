const { getSingleCoin } = require('../services/cryptoService');

module.exports = () => {
  return async (req, res, next) => {
    const coin = await getSingleCoin(req.params.id);
    if (coin && req.user) {
      coin.isOwner = coin.owner == req.user?.id;
      console.log(req.user);
      coin.isLogged = req.user;
      console.log(coin.isLogged);
      coin.isBought = Object.values(coin.buyers)
        .map(val => val.toString())
        .includes(req.user?.id);
    }
    res.locals.coin = coin;
    next();
  };
};
