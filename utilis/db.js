const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.DB_URL;

exports.connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log('DB Connected');
    } catch (error) {
        console.error('Error connecting to DB:', error.message);
    }
};
