const { verifyUser } = require('../services/userService');

module.exports = () => {
  return async (res, req, next) => {
    const token = res.cookies.token;
    if (token) {
      const user = await verifyUser(token);
      req.user = user;
      next();
    } else {
      res.clearCookie('token');
      res.redirect('/auth/login');
    }
  };
};
