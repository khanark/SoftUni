const { Schema, model } = require('mongoose');

const Accessory = require('./Accessory');

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
  accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }],
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
