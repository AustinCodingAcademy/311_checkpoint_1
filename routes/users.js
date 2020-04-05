const express = require('express');
const router = express.Router();

const controller = require('../controllers/users')

router.get('/users', controller.listUsers)

router.get('/users/:id', controller.showUser)

router.post('/users', controller.createUser)

router.put('/users/update/:id', controller.updateUser)

router.put('/users/delete/:id', controller.deleteUser)

module.exports = router;