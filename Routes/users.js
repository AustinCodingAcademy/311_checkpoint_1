const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
//const users = require("../data/index")
const {list , getOne, post} = require("../controller/users")
const users = require('../data/index')


router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get("/users",list)
router.get("/users/:userID",getOne)
router.post("/users",post)

module.exports = router