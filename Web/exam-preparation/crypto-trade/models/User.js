const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Missing username'],
  },
  email: {
    type: String,
    required: [true, 'Missing email'],
  },
  password: {
    type: String,
    required: [true, 'Missing password'],
  },
});

userSchema.pre('save', async function () {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

userSchema.method('comparePassword', async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
});

module.exports = model('User', userSchema);
