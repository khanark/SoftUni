module.exports = {
    isGuest,
    isOwner,
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

function isOwner(callback) {
    return async (req, res, next) => {
        const hotel = await callback(req.params.id);
        const isOwner = hotel.owner == req.user?.id;
        res.locals = {
            isOwner,
        };
        !isOwner ? res.redirect('/auth/login') : next();
    };
}
