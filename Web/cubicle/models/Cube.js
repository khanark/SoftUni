const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const cubeSchema = new Schema({
  name: {
    type: String,
    minLength: [5, 'Name should be atleast 5 characters long'],
    match: [/[A-Za-z0-9]+/, 'The name includes prohibited symbols'],
  },
  description: {
    type: String,
    minLength: [20, 'Description should be atleast 5 characters long'],
  },
  imageUrl: {
    type: String,
  },
  difficulty: {
    type: Number,
    min: [0, 'The minimum required value is 0'],
    max: [6, 'The value cannot exceed 6'],
  },
  accessories: { type: [ObjectId], ref: 'Accessory', default: [] },
  ownerId: { type: ObjectId, ref: 'User' },
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
