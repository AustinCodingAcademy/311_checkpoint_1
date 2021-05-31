const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const usersController = require('../controllers/user-controller')


router.get('/users', usersController.getAllUsers)

router.get('/users/:id', usersController.getUserById)

router.post('/users', usersController.createUser)

router.put('/users/:id', usersController.updateUser)

router.delete('/users/:id', usersController.deleteUser)

module.exports = router

