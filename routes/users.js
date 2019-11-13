const express = require('express')
const userRoutes = express.Router()
const userController = require("../controllers/users")

//route.get()
userRoutes.get('/users', userController.get)

//route.get(/:userId`)
userRoutes.get('/users/:userId', userController.getId)

//route.post()
userRoutes.post('/users', userController.post)

//route.put()
userRoutes.put('/users/:userId', userController.put)

//route.delete()
userRoutes.delete('/users/:userId', userController.deleteUser)



module.exports = userRoutes;