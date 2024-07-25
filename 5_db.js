const mongoose = require('mongoose');

// Define the MongoDB Connection URL
// Replace 'mydatabase' with any database name you want

// const MongoURL = 'mongodb://localhost:27017/mydatabase'; // Local URL
// const MongoURL = 'mongodb+srv://Gayatri:AkshuDeveloper@cluster0.h8vzgcu.mongodb.net/yourDatabaseName'; // Cloud URL

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
