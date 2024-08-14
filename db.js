// db.js
const mongoose = require('mongoose');

// Replace with your MongoDB URI
const mongoURI = 'mongodb://localhost:27017/Policies';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000,  // 45 seconds
};

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
