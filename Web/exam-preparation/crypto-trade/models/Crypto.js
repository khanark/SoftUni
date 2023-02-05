const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, 'Name should be atleast 2 characters long'],
  },
  image: {
    type: String,
    required: true,
    // TODO Add image validation for http:// and https://
    validate: {
      validator: function (val) {
        return /https?:\/\//.test(val);
      },
      message: 'Invalid image url',
    },
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price should be positive number'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description should be atleast 10 characters long'],
  },
  payment: {
    type: String,
    required: true,
    enum: ['crypto-wallet', 'debit-card', 'paypal', 'credit-card'],
  },
  buyers: [{ type: ObjectId, ref: 'User' }],
  owner: { type: ObjectId, ref: 'User' },
});

module.exports = model('Crypto', cryptoSchema);
