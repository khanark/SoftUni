const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

// TODO Check the User - Schema validation

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: [10, 'Email should be minumum 10 characters long'],
  },
  username: {
    type: String,
    required: true,
    minLength: [2, 'Username should be minumum 2 characters long'],
  },
  password: {
    type: String,
    required: true,
  },
  myPhotos: [{ type: ObjectId, ref: 'Photo' }],
});

module.exports = model('User', userSchema);
