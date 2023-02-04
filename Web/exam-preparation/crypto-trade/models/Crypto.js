const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  buyers: [{ type: ObjectId, ref: 'User' }],
  owner: { type: ObjectId, ref: 'User' },
});

module.exports = model('Crypto', cryptoSchema);
