const { Schema, model, Types: {ObjectId} } = require('mongoose');

const accessorySchema = new Schema({
  name: { type: String, required: [true, 'Missing name'] },
  imageUrl: {
    type: String,
    required: [true, 'Missing image'],
  },
  description: {
    type: String,
    required: [true, 'Missing description'],
    maxLength: [100, 'Exceeded maximum length'],
  },
  cubes: [{ type: [ObjectId], ref: 'Cube', default: [] }],
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;
