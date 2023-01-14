const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const cubeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: {
    type: String,
    required: [true, 'Missing image'],
  },
  difficulty: {
    type: Number,
    min: [0, 'The minimum required value is 0'],
    max: [6, 'The value cannot exceed 6'],
  },
  accessories: { type: [ObjectId], ref: 'Accessory', default: [] },
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
