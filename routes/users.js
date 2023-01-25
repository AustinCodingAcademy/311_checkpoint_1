const express = require('express');
const router = express.Router();
const usersController = require('../controller/users')

// GET /users - Return all users
router.get('/users', usersController.listUser)

// GET /users/:id - Return  matches (id)
router.get('/users/:id', usersController.showUser)
  
// POST /users
router.post('/users', usersController.createUser)
  
// PUT /users/:id
router.put('/users/:id', usersController.updateUser)

// DELETE /users/:id
router.delete('/users/:id', usersController.deleteUser)

module.exports = router;