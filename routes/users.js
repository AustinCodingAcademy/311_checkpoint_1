const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/', controller.listUsers);

router.get('/:id', controller.showUser);

router.post('/', controller.createUser);

router.delete('/:id', controller.deleteUser);