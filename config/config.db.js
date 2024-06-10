const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const connectDB = async()=> {
 try {
    await mongoose.connect(DB_URL);
    console.log('Database is connected successfully');
 } catch (error) {
    console.log('Database is not connected');
    console.log(error);
    process.exit(1);
 }
}

module.exports = connectDB;