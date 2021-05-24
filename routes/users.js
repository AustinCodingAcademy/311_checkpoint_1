const express = require('express')
const usersRouter = express.Router();
const usersController = require('../controllers/users.js');

usersRouter.get('/users', usersController.getAllUsers);
usersRouter.get('/users/:id', usersController.getUser);
usersRouter.post('/users', usersController.postUser);
usersRouter.put('/users/:id', usersController.putUser);
usersRouter.delete('/users/:id', usersController.deleteUser);




module.exports = usersRouter;