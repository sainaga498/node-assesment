const  Data  = require('../SC-Input/output.json');
const Carrier = require('../models/carrier');


const policyCarrier = async(req, res) => {
    try {
        
        let users = Data
    
        const carriers = users.map(user => ({
          company_name: user.company_name,
        }));
    
        
        const carrierArray = carriers; // Assuming agents is an array of objects in the request body
        const result = await Carrier.insertMany(carrierArray);
        res.status(201).json(result);
    } catch {
        console.log(error.message)
    }
}

module.exports = { policyCarrier }