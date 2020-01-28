const express = require('express');
const router = express.Router();
let userController = require('../data/users')

router.get('/', userController.listUser)
  
router.get('/:id', userController.showUser)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)
  
module.exports = router;

