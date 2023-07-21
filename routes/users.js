const express = require('express')
const usersController = require('../controller/users')
const router = express.Router()

// Get all users
router.get('/users', usersController.list)

// Get one user
router.get('/users/:id', usersController.show)

// Create a new user
router.post('/users', usersController.create)

// Update an existing user
router.put('/users/:id', usersController.update)

// Delete a user
router.delete('/users/:id', usersController.erase)

module.exports = router