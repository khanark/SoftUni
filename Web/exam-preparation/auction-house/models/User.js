const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    validate: {
      validator: function (val) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    require: true,
    minLength: [5, 'Password should be atleast 5 characters long'],
  },
  firstName: {
    type: String,
    required: true,
    minLength: [1, 'First name should be atleast 1 characters long'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, 'Last name should be atleast 1 characters long'],
  },
});

// make the email unique so nobody can create new user with the same value
userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: 'en',
      strength: 2,
    },
  }
);

userSchema.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

module.exports = model('User', userSchema);
