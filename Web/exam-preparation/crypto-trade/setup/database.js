const mongoose = require('mongoose');
const dbName = 'crypto';
const DATABASE_URL = `mongodb://127.0.0.1:27017/${dbName}`;

module.exports = async () => {
  mongoose.set('strictQuery', false);

  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected..');
  } catch (error) {
    console.log(`Database error: ${error.name}`);
  }
};
