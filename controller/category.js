const  Data  = require('../SC-Input/output.json');
const Carrier = require('../models/lob');


const categoryData = async(req, res) => {
    try {
        
        let users = Data
    
        const category = users.map(user => ({
         category_name: user.category_name,
        }));
    
        
        const categoryArray = category; // Assuming agents is an array of objects in the request body
        const result = await Carrier.insertMany(categoryArray);
        res.status(201).json(result);
    } catch {
        console.log(error.message)
    }
}

module.exports = { categoryData }