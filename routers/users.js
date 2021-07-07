const express = require('express')
const router = express.Router()

const usersController = (require('../controllers/users.js'))
router.get('/users', usersController.listUsers)
router.get('/users/:id', usersController.show)
router.post('/users' , usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.deleteUser)
module.exports = router