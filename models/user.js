// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  email: String,
  address: String,
  gender: String,
   zip: String,
   state: String,
   phone: String,
  userType: String,
   dob: String,  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
