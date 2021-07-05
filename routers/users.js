const express = require("express");
const bodyParser = require("body-parser");
//---------------Project Code Below------------------//

//Added Router Requirement
const router = express.Router()
//controller links go here:
const userController = require('../controllers/users')

//Middleware
router.use(bodyParser.json())

/* BEGIN - create routes here */

//GET method to get all products.
router.get("/users", userController.userGetAll)

//GET method to get single user's information.
router.get('/users/:userId', userController.userGetSpecified)

//POST Method
router.post('/users', userController.postUser)

//PUT Method - update a user
router.put('/users/:userId', userController.putUser)

// //DELETE Method
router.delete('/users/:userId', userController.deletedUser);

module.exports = router