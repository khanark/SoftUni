module.exports = {
  isLogged,
  isOwner,
};

function isLogged(...params) {
  return (req, res, next) => {
    if (req.user || params.includes(req.url.slice(1))) {
      next();
    } else {
      return res.redirect('/auth/login');
    }
  };
}

function isOwner(...params) {
  return (req, res, next) => {
    const {
      data: { owner },
    } = res.locals;
    if (req.user.id != owner && !params.includes(req.url.slice(1))) {
      res.redirect('/auth/login');
    } else {
      next();
    }
  };
}
