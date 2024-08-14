// models/User.js
const mongoose = require('mongoose');

const useraccountSchema = new mongoose.Schema({
    account_name: { type: String, required: true },

});

const UserAccount = mongoose.model('Account', useraccountSchema);

module.exports = UserAccount;
