const express = require("express");
const router = express.Router();
const usersController = require('../controllers/users');
//Get all the users
router.get('/users', usersController.listUsers);

// GET /users/:id
router.get('/users/:id',usersController.showUser);

//post/ users
router.post('/users',usersController.createUser);


//update user
router.put('/users/:id', usersController.updateUser);


//Delete user
router.delete('/users/:id',usersController.deleteUser);

module.exports = router;




