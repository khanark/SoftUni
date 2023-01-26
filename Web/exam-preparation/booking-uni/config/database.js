const mongoose = require('mongoose');
//TODO Check and set the correct database
const db = 'bookinguni';
const DATABASE_URL = `mongodb://127.0.0.1:27017/${db}`;

module.exports = async app => {
    mongoose.set('strictQuery', false);
    try {
        mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database is connected');
    } catch (error) {
        console.log(`There has been an error with the database ${error} `);
        process.exit(1);
    }
};
