const { verifyToken } = require('../services/userService');

module.exports = (req, res, next) => {
    const token = req.cookies.token;
    try {
        if (token) {
            req.user = verifyToken(token);
            res.locals = {
                user: req.user || undefined,
            };
        }
    } catch (error) {
        res.clearCookie('token');
        return res.redirect('/auth/login');
    }
    next();
};
