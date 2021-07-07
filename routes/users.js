const express = require('express');
const router = express.Router();


const usersController = require('../controllers/users');

// Get all users
router.get('/', usersController.listUsers)

// Get one user
router.get('/:id', usersController.showUser)

// Post new user
router.post('/', usersController.createUser)

// Update user
router.put('/:id', usersController.updateUser)

// Delete user
router.delete('/:id', usersController.deleteUser)

module.exports = router;