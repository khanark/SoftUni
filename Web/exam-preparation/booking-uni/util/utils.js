module.exports = {
    parseError,
    globalError
};

function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(v => v.message);
    } else {
        return error.message.split('\n');
    }
}

//global error handler
function globalError(error, req, res, next) {
    const errors = parseError(error);
    const { username } = req.body;
    const body = {};
    if (['register, login'].includes(req.pathname)) {
        body.username = username;
    } else {
        body.username = '';
    }
    res.render(req.pathname, body, errors);
    next();
}
