const mongoose = require('mongoose');
// TODO Change the name of the database
const dbName = 'sharedTrip';
const DATABASE_LINK = `mongodb://127.0.0.1:27017/${dbName}`;

module.exports = async app => {
  try {
    await mongoose.connect(DATABASE_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected');
  } catch (error) {
    console.log(
      `There has been an error connecting with the database: ${error}`
    );
    process.exit(1);
  }
};
