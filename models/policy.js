// models/User.js
const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policy_number: String,
    policy_start_date: String,
    policy_end_date: String,

});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
