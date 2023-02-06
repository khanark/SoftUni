const { verifyToken } = require('../services/userService');

module.exports = () => {
  return async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      try {
        const user = await verifyToken(token);
        req.user = user;
        res.locals.user = user;
      } catch (error) {
        res.clearCookie('token');
        res.redirect('/auth/login');
      }
    }
    next();
  };
};
