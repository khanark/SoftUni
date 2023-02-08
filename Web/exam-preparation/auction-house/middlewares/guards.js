module.exports = {
  isGuest,
  isAuthor,
  isUser,
};

function isGuest(...params) {
  return (req, res, next) => {
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);

    if (params.includes(path) || req.user) {
      next();
    } else {
      res.clearCookie('token');
      res.redirect('/auth/login');
      return;
    }
  };
}

function isUser(...params) {
  return (req, res, next) => {
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);
    const isLogged = Boolean(req.user);
    if (isLogged && !params.includes(path)) {
      res.redirect('/');
    } else {
      next();
    }
  };
}

// TODO: fix the isOwner logic for the routes

function isAuthor(...params) {
  return (req, res, next) => {
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);
    const { isAuthor } = res.locals.auction;

    if (isAuthor || params.includes(path)) {
      next();
    } else {
      res.redirect('/');
    }
  };
}
