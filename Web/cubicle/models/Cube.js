const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const connection = 'mongodb://127.0.0.1:27017/cubes';

const cubeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    difficulty: {
      type: Number,
      min: [0, 'The minimum required value is 0'],
      max: [6, 'The value cannot exceed 6'],
    },
  },
  {
    strictQuery: true,
  }
);

start().catch(err => console.log(err));

async function start() {
  await mongoose.connect(connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
