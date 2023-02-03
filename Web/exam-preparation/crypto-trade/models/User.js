const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    required: [true, 'Missing username'],
  },
  email: {
    required: [true, 'Missing email'],
  },
  password: {
    required: [true, 'Missing password'],
  },
});

module.exports = model('User', userSchema);
