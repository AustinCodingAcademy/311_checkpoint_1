const express = require('express');
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require('../controllers/users');

// define the routes for the controller

// get all users
router.get('/users', controller.list);

// get one individual comment
router.get('/users/:id', controller.show)

// add a user
router.post('/users',controller.create)

// delete a user
router.delete('/users/:id',controller.deleteUser)

// update a user
router.put('/users/:id', controller.updateUser)

// make the router available to the API
module.exports = router