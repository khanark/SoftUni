const mongoose = require('mongoose');
// TODO change the name of the database
const database = 'booktalk';
const DATABASE_LINK = `mongodb://127.0.0.1:27017/${database}`;

module.exports = async app => {
    mongoose.set('strictQuery', false);

    try {
        await mongoose.connect(DATABASE_LINK, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database is connected successfully...');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
