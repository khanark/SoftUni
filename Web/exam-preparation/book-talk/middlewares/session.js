const { verifyToken } = require('../services/userService');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const userData = verifyToken(token);
      req.user = userData;
      res.locals = {
        user: req.user || undefined,
      };
    } catch (error) {
      res.clearCookie();
      res.redirect('/auth/login');
      return;
    }
  }
  next();
};
