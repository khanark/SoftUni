const { Schema, model } = require('mongoose');

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
    required: true,
    validate: {
      validator: function (val) {
        return /[A-Za-z0-9]+/.test(val);
      },
      message: 'Password should contain only letters and numbers',
    },
    minLength: [8, 'Password should be atleast 8 characters long'],
  },
});

// setting an index for the username (to make it unique)
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
