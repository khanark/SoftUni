const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const tripSchema = new Schema({
  start: {
    type: String,
    required: true,
    minLength: [4, 'Starting point should be a minimum of 4 characters long'],
  },
  end: {
    type: String,
    required: true,
    minLength: [4, 'Ending point should be a minimum of 4 characters long'],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\//, 'Invalid image url'],
  },
  brand: {
    type: String,
    required: true,
    minLength: [4, 'Car brand should be a minimum of 4 characters long'],
  },
  seats: {
    type: Number,
    required: true,
    min: [0, 'Seats should be a minimum of 0'],
    max: [4, 'Seats should be a maximum of 4'],
  },
  price: {
    type: Number,
    required: true,
    min: [1, 'Price should be a minimum of 1'],
    max: [50, 'Price should be a maximum of 50'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description should be a minimum of 10 characters long'],
  },
  creator: {
    type: ObjectId,
    ref: 'User',
  },
  buddies: [{ type: ObjectId, ref: 'User' }],
});

module.exports = model('Trip', tripSchema);
