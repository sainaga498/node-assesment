const  Data  = require('../SC-Input/output.json');
const User = require('../models/user');
const error = require('console')


const usersdata = async(req, res) => {
    try {
        
        let users = Data
    
        const userDetails = users.map(item => ({
          firstname: item.firstname,
           dob: item.dob,
          address: item.address,
           phone: item.phone,
           state: item.state,
           zip: item.zip,
          email: item.email,
          gender: item.gender,
          userType: item.userType
        }));
    
        
        const usersArray = userDetails; // Assuming agents is an array of objects in the request body
        const result = await User.insertMany(usersArray);
        res.status(201).json(result);
    } catch {
        console.log(error)
    }
}

module.exports = { usersdata }