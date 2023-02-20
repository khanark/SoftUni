const { getSingle } = require('../services/dataService');

module.exports = () => {
  return async (req, res, next) => {
    const data = await getSingle(req.params.id);
    const userId = res.locals.user?.id;
    data.isAuthor = data.owner._id == userId;
    res.locals.photo = data;
    next();
  };
};
