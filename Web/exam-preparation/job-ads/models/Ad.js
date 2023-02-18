const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const adSchema = new Schema({
  headline: {
    type: String,
    required: true,
    minLength: [4, 'Headline should be a minimum of 4 characters long'],
  },
  location: {
    type: String,
    required: true,
    minLength: [8, 'Location should be a minimum of 8 characters long'],
  },
  companyName: {
    type: String,
    required: true,
    minLength: [3, 'Company name should be a minimum of 3 characters long'],
  },
  companyDescription: {
    type: String,
    required: true,
    maxLength: [
      40,
      'Company description should be a maximum of 40 characters long',
    ],
  },
  author: { type: ObjectId, ref: 'User' },
  appliedUsers: [{ type: ObjectId, ref: 'User' }],
});

module.exports = model('Ad', adSchema);
