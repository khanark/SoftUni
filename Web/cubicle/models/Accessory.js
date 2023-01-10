const { Schema, model } = require('mongoose');
const validator = require('mongoose-validator');

const Cube = require('./Cube');

const accessorySchema = new Schema({
  name: { type: String, required: true },
  imageUrl: {
    type: [String, 'image should be String'],
    required: [true, 'Missing image'],
    validate: {
      validator: value =>
        validator.isURL(value, {
          protocols: ['http', 'https'],
          require_tld: true,
          require_protocol: true,
        }),
      message: 'Must be a Valid URL',
    },
    description: {
      type: String,
      required: true,
      maxLength: [10, 'Exceeded maximum length'],
    },
    cubes: [{ type: Schema.Types.ObjectId, ref: 'Cube' }],
  },
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;
