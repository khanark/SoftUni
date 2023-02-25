module.exports = (err, req, res, next) => {
    let msg = err.message;
    if (err.message == 'invalid signature') {
        err.cause = 401;
    }
    if (err.name == 'ValidationError') {
        const error = Object.values(err.errors)[0].properties;
        err.cause = 400;
        msg = `${error.path}: ${error.message}`;
    }
    const statusCode = err.cause || 500; // Default to 500 if no status code is set
    res.status(statusCode).json({ message: msg });
};
