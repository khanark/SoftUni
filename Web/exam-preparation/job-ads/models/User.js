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
    match: [/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, 'Invalid email format'],
  },
  skillsDescription: {
    type: String,
    required: true,
    maxLength: [40, 'Description should not exceed 40 characters'],
  },
  password: {
    type: String,
    required: true,
  },
  myAds: [{ type: ObjectId, ref: 'Ad' }],
});

module.exports = model('User', userSchema);
