const express = require('express')
const router = express.Router()
//const { list, show, create, update, remove } = require('../controllers/users.js')
const { list, listActive, listInactive, show, create, update, remove } = require('../controllers/users.js')

// GET /users
router.get('/users', list)

// GET /users/active
router.get('/users/active', listActive)

// GET /users/inactive
router.get('/users/inactive', listInactive)

// GET /users/:id
router.get('/users/:id', show)

// POST /users
router.post('/users', create)

// PUT /users/:id
router.put('/users/:id', update)

// DELETE /users/:id
router.delete('/users/:id', remove)

module.exports = router;
