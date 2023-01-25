module.exports = {
    isGuest,
};

function isGuest() {
    return (req, res, next) => {
        if (!req.user) {
            res.redirect('/auth/login');
        } else {
            next();
        }
    };
}
