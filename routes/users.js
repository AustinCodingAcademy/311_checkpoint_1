const express = require('express')
const router = express.Router()

const users = require('../data/index')

let counter = users.length;

router.get('/', (req, res) => {
  res.send(users)
})

router.get('/:id', (req, res) => {
  let user = users.filter(user => user.id === Number(req.params.id))
  res.send(user)
})

router.post('/', (req, res) => {
  users.push(req.body)
  res.send(users)
})

module.exports = router;