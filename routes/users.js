const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')
// const {displayUsers, showUser, createUser, updateUser, deleteUser} = require('../data/index');




// get users
router.get('/index', userController.displayUsers)

//get users (id)
router.get('/index/:id', userController.showUser)

//post users
router.post('/index', userController.createUser)

// put users
router.put('/index/:id', userController.updateUser)

// delete users
router.delete('index', userController.deleteUser)

module.exports = router