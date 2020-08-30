const express = require('express')

const usersController = require('../controllers/users')
const router = express.Router()

// GET users
router.get('./users', usersController.listUsers)

// GET by id

router.get('/users/:id', usersController.showUser)

// post new user 

router.post('/users', usersController.createUser)

// update users 

router.put('/users/:id', usersController.updateUser)

// delete 

router.delete('/users/:id', usersController.deleteUser)

module.exports = router