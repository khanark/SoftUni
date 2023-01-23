const mongoose = require('mongoose');
const db = 'bookinguni';
const DATABASE_URL = `mongodb://127.0.0.1:27017/${db}`;

module.exports = app => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Default database connected');
    });

    mongoose.connection.on('error', err => {
        console.log(`Database error, ${err}`);
    });
};
