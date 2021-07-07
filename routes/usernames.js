const express = require("express");
const router = express.Router();

const {list, show} = require('../controllers/usernames');

router.get('/usernames', list);
router.get('/usernames/:id(\\d+)', show);

module.exports = router;