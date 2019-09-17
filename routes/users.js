const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/", usersController.index);

router.post("/", usersController.createUser);

router.get("/:id", usersController.showUser);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;
