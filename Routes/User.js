
const express = require('express')
const router = express.Router()
const {list, show, create} = require('../controllers/sampleUsers_Control');

router.get('/sampleUser', allUsers);
router.get('/sampleUsers/:id', show);
router.post('/sampleUser', create);
router.delete('/users/:id', user);
module.exports = router;