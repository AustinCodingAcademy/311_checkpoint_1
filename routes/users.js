const express = require('express');
const router = express.Router();

const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

const usersController = require('../controllers/users');

// Get all users
router.get('/', usersController.listUsers)

// Get one user
router.get('/:id', usersController.showUser)

// Post new user
router.post('/', usersController.createUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router;