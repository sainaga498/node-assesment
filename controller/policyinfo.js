const  Data  = require('../SC-Input/output.json');
const Policy = require('../models/policy');
const error = require('console')


const policyinfoDetails = async(req, res) => {
    try {
        
        let users = Data
    
        const policyinfo = users.map(item => ({
          policy_number: item.policy_number,
          policy_start_date: item.policy_start_date,
          policy_end_date: item.policy_end_date,
        
        }));
    
        
        const usersArray = policyinfo; // Assuming agents is an array of objects in the request body
        const result = await Policy.insertMany(usersArray);
        res.status(201).json(result);
    } catch {
        console.log(error)
    }
}

module.exports = { policyinfoDetails }