// requirements 
const express = require("express");
const router = express.Router();
const usersController = require('../controllers/users.js'); 

//all requests for users route
router.get('/', usersController.getDefaultRoute); 
  
router.get('/users', usersController.getUsers); 
  
router.get('/users/:id', usersController.getUserById); 
  
router.post('/users', usersController.createNewUser);
  
router.put('/users/:id', usersController.updateUser); 
  
router.delete('/users/:id', usersController.deleteUser); 

//export router 

module.exports = router; 