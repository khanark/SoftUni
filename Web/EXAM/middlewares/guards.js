module.exports = {
  isGuest,
  isUser,
};

// TODO Check where to redirect in the assignment

function isGuest() {
  return (req, res, next) => {
    if (!res.locals.user) {
      res.clearCookie('token');
      return res.redirect('/404');
    }
    next();
  };
}

function isUser() {
  return (req, res, next) => {
    if (res.locals.user) {
      return res.redirect('/404');
    }
    next();
  };
}
