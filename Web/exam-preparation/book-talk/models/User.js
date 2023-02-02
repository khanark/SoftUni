const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        minLength: [4, 'Username must be atleast 4 characters long.'],
    },
    email: {
        type: String,
        minLength: [10, 'Email must be atleast 10 characters long.'],
    },
    password: {
        type: String,
        minLength: [3, 'Password must be atleast 3 characters long.'],
    },
});

module.exports = model('User', userSchema);
