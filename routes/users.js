const express = require('express');
const router = express.Router();
const users = require('../data/index')

router.get('/users', (req, res) =>{
  res.json(users)
});

router.get('/users/:id', (req, res) => {
const user = users.find(user => user.id === parseInt(req.params.id));
console.log(user)
});

router.post('/users', (req, res) => {

});

router.put('/users/:id', (req, res) => {

});

router.delete('/users/:id', (req, res) => {

});

module.exports = router;