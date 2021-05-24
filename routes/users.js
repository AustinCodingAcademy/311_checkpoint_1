const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
const controller = require("../controllers/users")

router.get("/users", controller.listUsers)

router.get("/users/:id", controller.showUser)

router.post("/users", controller.createUser)

router.put("/users/:id", controller.updateUser)

router.delete("/users/:id", controller.deleteUser)

module.exports = router
