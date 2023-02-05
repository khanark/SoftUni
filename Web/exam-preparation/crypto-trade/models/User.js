const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Missing username'],
    minLength: [5, 'Username should be atleast 5 characters long'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Missing email'],
    minLength: [10, 'Email should be atleast 10 characters long'],
  },
  password: {
    type: String,
    required: [true, 'Missing password'],
    minLength: [4, 'Password should be atleast 4 characters long'],
  },
});

userSchema.methods.comparePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};

userSchema.pre('save', async function () {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

module.exports = model('User', userSchema);
