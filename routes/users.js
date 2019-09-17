const express = require("express");
const router = express.Router();

const usersController = require("../controllers/Users");

router.get("/users/:id", usersController.showUser);
router.get("/users", usersController.listUsers);
router.put("/users/:id", usersController.updateUser);
router.post("/users", usersController.createUser);
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
