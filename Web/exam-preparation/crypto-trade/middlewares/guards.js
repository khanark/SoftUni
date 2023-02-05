module.exports = {
  isLogged,
  isOwner,
};

function isLogged(...params) {
  return (req, res, next) => {
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);
    if (!req.user && !params.includes(path)) {
      res.clearCookie('token');
      res.render('404');
      return;
    } else {
      next();
    }
  };
}

function isOwner(...params) {
  return (req, res, next) => {
    const { isOwner } = res.locals.coin;
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);
    if (!isOwner && !params.includes(path)) {
      // res.clearCookie('token');
      res.render('404');
      return;
    } else {
      next();
    }
  };
}
