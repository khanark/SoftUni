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
    match: [/^[a-zA-Z]+@[a-zA-Z].*$/, 'Invalid email adress'],
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  password: {
    type: String,
    required: true,
  },
  tripsHistory: [{ type: ObjectId, ref: 'Trip' }],
});

module.exports = model('User', userSchema);
