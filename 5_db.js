const mongoose = require ('mongoose');

//define the MongoDB Connection URL
// const MongoURL = 'mongodb://localhost:27017/mydatabase'//replace mydatabase name with any database name you wants
mongoose.connect('mongodb://localhost:27017/Hotel', {
    useNewUrlParser: true,  //set mongodb connection 
    useUnifiedTopology: true
});

// Get the default connection object 
//mongoose maintain a default connection object representing the mongoDB connection
const db = mongoose.connection;

//define event listeners for  database connection
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('open', () => {
    console.log('MongoDB  server connected successfully');
});
db.on('disconnected', ()=> 
{
    console.log('MongoDB disconnected ');
})

//export the db object that show mongodb connection
module.exports =db;