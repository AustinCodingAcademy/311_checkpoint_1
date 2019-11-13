const express = require('express');
const router = express.router();
const {listUser, showUsers, postUsers, putUsers, deleteUsers} = require('../controllers/users');





router.get('/users', userController.listUsers)
router.get('/user/:id', userController.showUsers)
router.post('/users', userController.listUsers)
router.put('/users', userController.listUsers)
router.delete('/users', userController.listUsers)