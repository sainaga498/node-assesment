// models/User.js
const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
  company_name: { type: String, required: true },

});

const Carrier = mongoose.model('Carrier', carrierSchema);

module.exports = Carrier;
