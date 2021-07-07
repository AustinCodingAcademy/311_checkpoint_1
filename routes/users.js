const express = require('express');
const router = express.Router();
const {listUsers, showUsers, updateUsers, createUsers, deleteUsers} = require('../controllers/users');

//get
router.get("/users", listUsers);
//get by ID
router.get("/users/:id", showUsers);
//create(post) user
router.post("/users", createUsers);
//put
router.put("/users/:id", updateUsers);
//delete
router.delete("/users/:id", deleteUsers);

module.exports = router;