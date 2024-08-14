// models/User.js
const mongoose = require('mongoose');

const lobSchema = new mongoose.Schema({
    category_name: { type: String, required: true },

});

const Lob = mongoose.model('Lob', lobSchema);

module.exports = Lob;
