const express = require('express');
const router  = express.Router();
const 
    agent
  = require('./controller/agent.js');

  const Account = require('./controller/account.js')
  const Carrier = require('./controller/policyCarrier.js')
  const Category = require('./controller/category.js')
  const User = require('./controller/user.js')
  const Policy = require('./controller/policyinfo.js')
  const Message = require('./controller/message.js')



 router.post("/agent",agent.agentdata)
 router.post('/account', Account.accountData)
 router.post('/Carrier', Carrier.policyCarrier)
 router.post('/Category', Category.categoryData)
 router.post("/user", User.usersdata)
 router.post("/Policy", Policy.policyinfoDetails)
 router.post("/sechduled-message", Message.getMessage)





 module.exports = router