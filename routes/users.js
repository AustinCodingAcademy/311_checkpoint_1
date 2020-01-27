const express = require("express");
const router = express.Router();

const {listUsers, showUser, createUser, updateUser, deleteUser} = require('../controllers/users');

router.get('/users', listUsers);
router.get('/users/:id(\\d+)', showUser);
router.post('/users', createUser);
router.put('/users/:id(\\d+)', updateUser);
router.delete('/users/:id(\\d+)', deleteUser);

module.exports = router;