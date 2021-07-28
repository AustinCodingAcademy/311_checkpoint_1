const express = require('express');
const router = express.Router(); 
const customersController = require('../controllers/customers.js');
const { checkJwt } = require('../middleware/index.js'); 
 

router.get('/', customersController.getDefaultRoute); 

router.get('/customers', customersController.getCustomers);

router.get('/customers/:storeId', customersController.getCustomersByStoreId); 

router.get('/customersContactInfo', customersController.getAllCustomerContactInfo); 

router.get('/customersContactInfo/:customer_Id', customersController.getCustomerContactInfoByCustomerId); 

router.post('/customers', checkJwt, customersController.createCustomer); 

module.exports = router;