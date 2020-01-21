const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users', usersController.list);
router.get('/users/:id', );
router.post('/users', );
router.put('/users:/id', );
router.delete('/users/id', );

module.exports = router;
