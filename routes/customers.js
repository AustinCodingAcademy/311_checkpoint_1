const express = require('express');
const router = express.Router(); 
const customersController = require('../controllers/customers.js'); 

router.get('/customers', customersController.getCustomers); 

router.get('/customers/:storeId', customersController.getCustomersByStoreId); 

router.get('/customersContactInfo', customersController.getAllCustomerContactInfo); 

router.get('/customersContactInfo/:customer_Id', customersController.getCustomerContactInfoByCustomerId); 

module.exports = router; 