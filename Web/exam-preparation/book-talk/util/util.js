module.exports = {
    parseError,
};

function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.error).map(val => val.message);
    } else {
        return error.message.split('\n');
    }
}
