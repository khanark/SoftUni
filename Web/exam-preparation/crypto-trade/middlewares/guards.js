module.exports = {
  isLogged,
};

function isLogged(...params) {
  return (req, res, next) => {
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);
    console.log(path);
    console.log(params);
    console.log(!params.includes(path));
    if (!req.user && !params.includes(path)) {
      res.clearCookie('token');
      res.redirect('/auth/login');
      return;
    } else {
      next();
    }
  };
}
