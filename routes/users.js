const express = require('express');
const controller = require('../controllers/users');
const router = express.Router();

router.get('/users', controller.listUsers)
router.get('/users/:id', controller.showUser)
router.post('/users', controller.createUser)
router.put('/users/:id', controller.updateUser)
router.delete('/users/:id', controller.deleteUser)

module.exports = router;