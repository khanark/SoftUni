module.exports = {};

function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(v => v.message);
    } else if (typeof error.message == 'string') {
        return error.message.split('\n');
    }
}
