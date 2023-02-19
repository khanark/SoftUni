const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

// TODO Check the User - Schema validation

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    match: [/^[a-zA-Z]+ [a-zA-Z]+$/, 'Invalid full name format'],
  },
  username: {
    type: String,
    required: true,
    minLength: [5, 'Username should be minimum 5 characters long'],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model('User', userSchema);
