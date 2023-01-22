const mongoose = require('mongoose');

require('./Cube');

const connection = 'mongodb://127.0.0.1:27017/cubes';

async function init() {
    try {
        await mongoose.connect(connection, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: false,
        });

        console.log('Database connected');
        mongoose.connection.on('error', function (err) {
            console.log('Mongoose default connection error: ' + err);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = init;
