const express = require("express");
const router = express.Router();

const {list, show} = require('../controllers/locations');

router.get('/locations', list);
router.get('/locations/:id(\\d+)', show);

module.exports = router;