const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

router.get('/users', userController.list);
router.get('/users:id', userController.show)
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('users/:id', userController.deleteUser);

module.exports = router;