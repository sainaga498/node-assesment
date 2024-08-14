const  Data  = require('../SC-Input/output.json');
const Agent = require('../models/agent');


const agentdata = async(req, res) => {
    try {
        
        let users = Data
    
        const userDetails = users.map(user => ({
            Agent_name: user.agent,
        }));
    
        
        const agentsArray = userDetails; // Assuming agents is an array of objects in the request body
        const result = await Agent.insertMany(agentsArray);
        res.status(201).json(result);
    } catch {
        console.log(error.message)
    }
}

module.exports = { agentdata }