const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    // TODO: Add regex validation for a valid email adress
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

module.exports = model('User', userSchema);
