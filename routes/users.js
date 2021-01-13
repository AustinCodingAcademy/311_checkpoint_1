const express = require('express')
const router = express.Router()

//Controller
const usersController = require('../controllers/usersC')

//GET

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUsersById)

//POST

router.post('/', usersController.postNewUser)

//PUT

router.put('/:id', usersController.updateUserById)

//DELETE
router.delete('/:id', usersController.deleteUserById)

module.exports = router