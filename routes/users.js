const express = require("express");
const router = express.Router();
const controllers = require('../controllers/users')

router.get('/users', controllers.listUser);

router.get("/users/:id", controllers.showUser);

router.post("/users", controllers.createUser);

router.put("/users/:id", controllers.updateUser);

router.delete("/users/:id", controllers.deleteUser);

module.exports = router;
