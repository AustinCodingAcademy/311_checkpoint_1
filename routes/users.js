const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/users", users.listUsers);
router.get("/users/:id", users.showUsers);
router.post("/users", users.createUser);
router.put("/users/:id", users.updateUser);
router.delete("/users/:id", users.deleteUser);

module.exports = router;