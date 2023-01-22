const { Schema, model } = require('mongoose');
const { hash } = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        minLength: [5, 'Username should be atleast 5 characters long'],
        validate: {
            validator: function (val) {
                return /[A-Za-z0-9]+/.test(val);
            },
            message: 'Password should contain only letters and numbers',
        },
    },
    hashedPassword: {
        type: String,
        minLength: [8, 'Password should be atleast 8 characters long'],
        validate: {
            validator: function (val) {
                return /[A-Za-z0-9]+/.test(val);
            },
            message: 'Password should contain only letters and numbers',
        },
    },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('hashedPassword')) {
        this.hashedPassword = await hash(this.hashedPassword, 10);
    }
    next();
});

userSchema.index(
    { username: 1 },
    {
        unique: true,
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
