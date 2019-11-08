const express = require("express");
const router = express.Router();
const controllers = require('../controllers/users')

router.get('/users', controllers.listUser);

router.get("/users/:id", controllers.showUser);

router.post("/users", controllers.createUser);

router.put("/users/:id", (req, res) => {});

router.delete("/users/:id", (req, res) => {});

module.exports = router;
