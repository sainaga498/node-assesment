const  Data  = require('../SC-Input/output.json');
const Account = require('../models/user_account');


const accountData = async(req, res) => {
    try {
        
        let users = Data
    
        const accounts = users.map(user => ({
          account_name: user.account_name,
        }));
    
        
        const accountsArray = accounts; // Assuming agents is an array of objects in the request body
        const result = await Account.insertMany(accountsArray);
        res.status(201).json(result);
    } catch {
        console.log(error.message)
    }
}

module.exports = { accountData }