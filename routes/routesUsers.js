const express = require('express');
const router = express.Router();
let controllerUsers = require('../controllers/controllerUsers');

router.get('/', controllerUsers.usersGet);
router.get('/:id', controllerUsers.usersGetId);
router.post('/', controllerUsers.usersPost);
router.put('/:id', controllerUsers.usersPut);
router.delete('/:id', controllerUsers.usersDelete);

module.exports = router;