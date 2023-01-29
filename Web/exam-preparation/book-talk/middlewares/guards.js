module.exports = {
    isLogged,
};

function isLogged() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            return res.redirect('/auth/login');
        }
    };
}
