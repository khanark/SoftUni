module.exports = (...excluded) => {
    return (req, res, next) => {
        if (req.body) {
            for (const key in req.body) {
                if (excluded.includes(req.body[key])) {
                    continue;
                } else {
                    req.body[key] = req.body[key].trim();
                }
            }
        }
        next();
    };
};
