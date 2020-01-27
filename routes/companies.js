const express = require("express");
const router = express.Router();

const {list, show} = require('../controllers/companies');

router.get('/companies', list);
router.get('/companies/:id(\\d+)', show);

module.exports = router;