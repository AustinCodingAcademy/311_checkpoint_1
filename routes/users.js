const express = require('express')
const userRoutes = express.Router()
const userController = require("../controllers/users")

//route.get()
userRoutes.get('/users', userController.get)

//route.get(/:userId`)
userRoutes.get('/user/:userId', userController.getId)

//route.post()
userRoutes.post('/user', userController.post)

module.exports = userRoutes;