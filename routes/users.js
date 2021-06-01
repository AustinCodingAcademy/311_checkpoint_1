const express = require("express")
const router = express.Router()
const userController = require("../controllers/users.js")

router.get("/users", userController.getUsers)
router.get("/users/:id", userController.getUsersById)
router.post("/users", userController.create)
router.put("/users/:id", userController.updateUser)
router.delete("/users/:id" , userController.removeUser)

module.exports = router
