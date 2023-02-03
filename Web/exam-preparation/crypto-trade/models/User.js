const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Missing username'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Missing email'],
  },
  password: {
    type: String,
    required: [true, 'Missing password'],
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
