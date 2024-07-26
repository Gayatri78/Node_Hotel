const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Define the MongoDB Connection URL
// Local URL
// const mongoURL = 'mongodb://localhost:27017/Hotel';

// Cloud URL
// const mongoURL = 'mongodb+srv://gayatrisadhav:Akshu@cluster0.fnnmqrh.mongodb.net/'; 
// mongoose.connect(mongoURL);

// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// Set the MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Get the default connection object
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('MongoDB server connected successfully');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the db object that shows MongoDB connection
module.exports = db;
