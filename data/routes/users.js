const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

//Get All Things
router.get('/', usersController.listUsers)

//Get One Thing
router.get('/:id', usersController.showUser)

//Create One Thing
router.post('/', usersController.createUser)

//PUT
router.put('/:id', usersController.updateUser)


//DELETE
router.delete('/:id', usersController.deleteUser)

module.exports = router;




//GET USERS Return All


//GET USERS/:ID


//POST USERS

//PUT USERS/:ID

//DELETE UDERS/:ID