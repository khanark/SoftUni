const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    minLength: [2, 'Title should be atleast 2 characters long'],
  },
  author: {
    type: String,
    minLength: [5, 'Author should be atleast 5 characters long'],
  },
  genre: {
    type: String,
    minLength: [3, 'Genre should be atleast 3 characters long'],
  },
  stars: {
    type: Number,
    min: [1, 'Stars minimum value should be atleast 1'],
    max: [5, 'Stars cannot be more than 5'],
  },
  image: {
    type: String,
    required: [true, 'Missing image'],
    validate: {
      validator: function (value) {
        return /^https?:\/\//.test(value);
      },
      message: 'Not a valid image url.',
    },
  },
  review: {
    type: String,
    minLength: [10, 'Review should be atleast 10 characters long'],
  },
  owner: { type: ObjectId, ref: 'User' },
  wishList: [{ type: ObjectId, ref: 'User' }],
});

module.exports = model('Book', bookSchema);
