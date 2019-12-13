const express = require('express')
const router = express.Router()
const {listUsers, showUser, updateUser, DeleteUser} = require('../controllers/users_conroller');

router.get('/users', listUsers);
router.get('/users/:id', showUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/: id', deleteUser);

module.exports = router;
