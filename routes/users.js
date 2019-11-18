const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')
// const {displayUsers, showUser, createUser, updateUser, deleteUser} = require('../data/index');




// get users
router.get('/users', userController.displayUsers)

//get users (id)
router.get('/users/:id', userController.showUsers)

//post users
router.post('/users', userController.createUser)

// put users
router.put('/users/:id', userController.updateUser)

// delete users
router.delete('/users/:id', userController.deleteUser)

module.exports = router