const mongoose = require('mongoose');
const dbName = 'courseAcademy';

const DATABASE_URL = `mongodb://127.0.0.1:27017/${dbName}`;

module.exports = () => {
  mongoose.set('strictQuery', true);
  try {
    mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.log(`There has been an internal error with the database: ${error}`);
    process.exit(1);
  }
};
