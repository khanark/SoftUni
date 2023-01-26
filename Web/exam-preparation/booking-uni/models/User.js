const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

//TODO Check the assignment for the correct User Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'missing email'],
        unique: true,
    },
    username: {
        type: String,
        required: [true, 'missing username'],
        unique: true,
    },
    hashedPassword: { type: String, required: [true, 'missing password'] },
    bookedHotels: [{ type: ObjectId, ref: 'Hotel' }],
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
