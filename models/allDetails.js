const mongoose = require('mongoose');

// Define the schema
const allDetailsSchema = new mongoose.Schema({
    agent: String,
    userType: String,
    policy_mode: Number,
    producer: String,
    policy_number: String,
    premium_amount_written: String,
    premium_amount: Number,
    policy_type: String,
    company_name: String,
    category_name: String,
    policy_start_date: Date,
    policy_end_date: Date,
    csr: String,
    account_name: String,
    email: String,
    gender: String,
    firstname: String,
    city: String,
    account_type: String,
    address: String,
    state: String,
    dob: Date,
    primary: String,
    Applicant_ID: String,
    agency_id: String,
    hasActive_ClientPolicy: String
});

// Create the model
const AllDetails = mongoose.model('AllDetails', allDetailsSchema);

module.exports = AllDetails
