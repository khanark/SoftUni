module.exports = {
  isLogged,
};

function isLogged() {
  return (req, res, next) => {
    if (res.locals.user) {
      next();
    } else {
      res.clearCookie('token');
      res.redirect('/auth/login');
    }
  };
}
