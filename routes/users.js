const express = require('express');
const router = express.Router();
const {getAllUsrs, getUsr, makeUsr, updtUsr, rmvUsr} = require('../controller/users');

// Get all users
router.get('/users', getAllUsrs);

// Get one user
router.get('/users/:id', getUsr);

// Make a users
router.post('/users', makeUsr);

// Update a user
router.put('/users/:id', updtUsr);

// Remove a user
router.delete('/users/:id', rmvUsr);

module.exports = router;