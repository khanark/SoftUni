const { verifyUser } = require('../services/userService');

module.exports = () => {
  return async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      try {
        // if you cannot verify the user throw error
        const user = await verifyUser(token);
        req.user = user;
        res.locals = {
          user: req.user,
        };
      } catch (error) {
        res.clearCookie('token');
        res.redirect('/auth/login');
      }
    }
    next();
  };
};
