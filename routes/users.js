
const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users");

router.get("/users", usersControllers.list);

router.get("/users/:id", usersControllers.show);

router.post("/users", usersControllers.create);

router.put("/users/:id", usersControllers.update);

router.delete("/users/:id", usersControllers.DELETE);

module.exports = router;