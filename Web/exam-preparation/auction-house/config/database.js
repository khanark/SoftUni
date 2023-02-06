const mongoose = require('mongoose');
const dbName = '';
const DATABASE_LINK = 'mongodb://127.0.0.1:27017';

module.exports = async app => {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(DATABASE_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected...');
  } catch (error) {
    console.log(`There was an error connecting with the database: ${err.name}`);
  }
};
