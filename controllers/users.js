const users = require("../data/index")
const sample = require("../data/sampleUser")

const listUsers = (req, res) => {
  res.json(users)
}

const showUser = (req, res) => {
  users.forEach(user => {
    if (user.id == req.params.id) {
      res.json(user)
    }
  })
}

const createUser = (req, res) => {
  let counter = ++users.length
  users.push({
    id: ++counter,
    body: req.body.message
  })
  res.json(users[users.length - 1])
}

const updateUser = (req, res) => {
  users.forEach(user => {
    if (user.id == req.params.id) {
      let index = users.indexOf(user)
      users[index] = sample
      res.json(users)
    }
  })
}

const deleteUser = (req, res) => {
  users.forEach(user => {
    if (user.id == req.params.id) {
      let index = users.indexOf(user)
      users.splice(index, 1)
      res.json(users)
    }
  })
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }
