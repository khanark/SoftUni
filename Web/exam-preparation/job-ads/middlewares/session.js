const { verifyToken } = require('../services/userService');

module.exports = () => {
  return async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      try {
        const user = await verifyToken(token);
        res.locals.user = user;
      } catch (error) {
        res.clearCookie('token');
        return res.redirect('/login');
      }
    }
    next();
  };
};
