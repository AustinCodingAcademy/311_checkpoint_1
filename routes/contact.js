const express = require("express");
const router = express.Router();

const {list, show} = require('../controllers/contact');

router.get('/contact', list);
router.get('/contact/:id(\\d+)', show);

module.exports = router;