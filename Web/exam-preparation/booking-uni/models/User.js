const { Schema, model } = require('mongoose');

//TODO Check the assignment for the correct User Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'please enter email'],
        unique: true,
    },
    username: {
        type: String,
        required: [true, 'please enter username'],
        unique: true,
    },
    hashedPassword: { type: String, required: [true, 'please enter password'] },
});

userSchema.index(
    { email: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

userSchema.index(
    { username: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
