const express = require('express')
const router = express.Router()

const usersControllers = require('../controllers/users')

// GET all users
router.get('/users', usersControllers.listUsers)

// GET specific user
router.get('/users/:id', usersControllers.showUser)

// POST new user
router.post('/users', usersControllers.createUser)

// PUT edit user
router.put('/users/:id', usersControllers.updateUser)

// Delete user
router.delete('/users/:id', usersControllers.deleteUser)

module.exports = router