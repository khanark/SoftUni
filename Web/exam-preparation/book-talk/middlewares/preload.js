const { bookService } = require('../services');

// TODO: Check the name of the service

module.exports = () => {
  return async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await bookService.getSingleBook(id);
      data.isOwner = req.user?.id == data.owner;
      data.isWished = data.wishList
        .map(el => el._id.toString())
        .includes(req.user?.id);
      res.locals.data = data;
      res.locals.getId = () => data._id.toString();
      next();
    } catch (error) {
      next(error);
    }
  };
};
