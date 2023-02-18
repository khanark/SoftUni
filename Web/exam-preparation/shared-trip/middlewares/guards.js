module.exports = {
  isGuest,
  isUser,
};

// TODO Check where to redirect in the assignment

function isGuest() {
  return (req, res, next) => {
    if (!res.locals.user) {
	  res.clearCookie('token');
      return res.redirect('/auth/login');
    }
	next()
  };
}

function isUser() {
	return (req, res, next) => {
		if(res.locals.user) {
			return res.redirect("/")
		}
		next()
	}
}
