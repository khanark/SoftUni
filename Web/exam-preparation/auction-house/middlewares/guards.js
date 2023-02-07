module.exports = {
  isLogged,
};

function isLogged(...params) {
  return (req, res, next) => {
    const path = req.url.slice(req.url.lastIndexOf('/') + 1);
    if (!req.user || !params.includes(path)) {
      res.redirect('/auth/login');
    } else {
      next();
    }
  };
}

// TODO: fix the isOwner logic for the routes

// function isOwner(...params) {
//   return (req, res, next) => {
//     const path = req.url.slice(req.url.lastIndexOf('/') + 1);
//     if (!req.user || !params.includes(path)) {
//       res.redirect('/auth/login');
//     } else {
//       next();
//     }
//   }
// }