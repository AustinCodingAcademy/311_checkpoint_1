const users = require("../data/index")


function getAllUsers(req, res) {
  res.json(users)
}


const getUserById = (req, res) => {
  if (req.params.id > users.length) {
    res.sendStatus(404)
  }
  users.forEach(user => {
    if (user.id == req.params.id) {
      res.json(user)
    }
  })
}

const createUser = (req, res) => {
  let counter = users.length
  users.push({
    id: ++counter,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    website: req.body.website,
    company: req.body.company
  })
  res.json(users[users.length - 1])
}

const updateUser = (req, res) => {
  if (req.params.id > users.length) {
    res.sendStatus(404)
  }
  users.forEach(user => {
    if (user.id == req.params.id) {
      let index = users.indexOf(user)
      users[index] = sample
      res.json(users)
    }
  })
}

const deleteUser = (req, res) => {
  if (req.params.id > users.length) {
    res.sendStatus(404)
  }
  users.forEach(user => {
    if (user.id == req.params.id) {
      let index = users.indexOf(user)
      users.splice(index, 1)
      res.json(users)
    }
  })
}
module.exports = {getAllUsers, getUserById, createUser, deleteUser, updateUser}
