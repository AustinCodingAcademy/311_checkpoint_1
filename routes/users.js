const express = require('express');
const router = express.router();
const {listUser, showUsers, postUsers, putUsers, deleteUsers} = require('../controllers/users');





router.get("/users, listUsers)")