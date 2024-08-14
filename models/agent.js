// models/User.js
const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  Agent_name: { type: String, required: true },

});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
