const express = require('express')
const app = express()  
const controllers = require('../controllers/users')
const router = express.Router()

//show all users
router.get('/users', controllers.listUsers)
//get a user by id
router.get('/users/:id', controllers.showUser)
//create new user
router.post('/users', controllers.createUser)
// update user
router.put('/users/:id', controllers.updateUser)
//delete user
router.delete('/users/:id', controllers.deleteUser)
  
module.exports = router
  