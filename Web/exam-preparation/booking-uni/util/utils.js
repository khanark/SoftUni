module.exports = {
    parseError,
    globalError,
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
    res.render(req.path.slice(1), { errors });
}
