const express = require ('express');
const usersController = require ('../controllers/users.js');
const router = express.Router();

router.get('/users', usersController.getAllUsers);

router.get('/users/:id', usersController.getUserById);

router.post('/users', usersController.addUser);

router.put('/users/:id', usersController.updateUser);

router.delete('users/:id', usersController.deleteUserbyId);

module.exports = router;
