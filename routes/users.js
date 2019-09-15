const express = require('express');
const router = express.Router();

router.get('/users', usersController.listUsers)
router.get('/users/:id', usersController.showUser)
router.post('/users', usersController.createUser)
router.put('/users', usersController.updateUser)
router.delete('/users', usersController.removeUser)

module.exports = router;