const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: [true, 'please enter email'] },
    username: { type: String, required: [true, 'please enter username'] },
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

const User = model('User', userSchema);

module.exports = User;
