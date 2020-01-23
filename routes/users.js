const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')


router.get('/', userController.listUsers)

router.get('/:id', userController.showUser)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)


module.exports = router;