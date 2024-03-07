
const mongoose = require('mongoose');
const connect = "mongodb+srv://Aaqib:Nelofar@test.f5399gl.mongodb.net/testnet?retryWrites=true&w=majority&appName=test"; 
const connectDB = async () => {
  try {
    await mongoose.connect(connect);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
