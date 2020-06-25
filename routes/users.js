const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')
const users = require('../controllers/users')

// route to get all users
router.get('/users', usersController.listUsers)

// route to return the user with matching id
router.get('/users/:id', usersController.showUsers)

// route to create new user
router.post('/users', usersController.createUser)

// route to edit  one user with the matching id
router.put('/users/:id', usersController.updateUser)

// route to delete a user with the matching id

router.delete('/users/:id', usersController.deleteUser)

module.exports = router