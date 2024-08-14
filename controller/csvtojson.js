const fs = require('fs');
const csvjson = require('csvtojson');
const path = require('path');
const { error } = require('console');
const UserAccount = require('../models/allDetails'); 




const csvtojson = async (req) => {
    const filePath = path.join(__dirname, '/SC-Input/data.csv');
    const filejson = path.join(__dirname, '/SC-Input/output.json');
    let productsData = []
    try {

        const data = await csvjson().fromFile(filePath)
        data.forEach(element => {
            productsData.push(element)
        })
        fs.writeFileSync(filejson, JSON.stringify(productsData), 'utf8', () => { });
        return {productsData}

    } catch {
          console.log(error)
    }
}



module.exports = { csvtojson }


