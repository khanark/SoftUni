const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const houseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Apartment', 'Villa', 'House'],
  },
  year: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availablePieces: {
    type: Number,
    required: true,
  },
  rentedAHome: [{ type: ObjectId, ref: 'User' }],
  owner: { type: ObjectId, ref: 'User' },
});

module.exports = model('House', houseSchema);
