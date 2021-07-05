const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

// get /users to return all users
router.get('/', usersController.listUsers);

//get /users/:id to return user that matches the path param (id)
router.get('/:id', usersController.showUser);

//post /users create a new user (sampleUser).
//increment the id so that we always insert the next available id
router.post('/', usersController.createUser);

//put /users/:id to update 1 user match the path param (id)
router.put('/:id', usersController.updateUser);

//delete /users/:id to delete one user by its id
router.delete('/:id', usersController.deleteUser);

module.exports = router