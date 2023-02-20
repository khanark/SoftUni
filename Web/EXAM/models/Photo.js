const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, 'The name should be minimum 2 characters long'],
  },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\//, 'Invalid image url'],
  },
  age: {
    type: Number,
    required: true,
    min: [1, 'The age should be minimum of 1'],
    max: [100, 'The age should be maximum of 100'],
  },
  description: {
    type: String,
    required: true,
    minLength: [5, 'The description should be minimum 5 characters long'],
    maxLength: [50, 'The description should be maximum 50 characters long'],
  },
  location: {
    type: String,
    required: true,
    minLength: [5, 'The location should be minimum 5 characters long'],
    maxLength: [50, 'The location should be maximum 50 characters long'],
  },
  commentList: [],
  owner: { type: ObjectId, ref: 'User' },
});

module.exports = model('Photo', photoSchema);
