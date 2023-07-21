const users = require('../data/index')
let usersLength = users.length

const list = (req,res) => {
  res.json(users)
}

const show = (req,res) => {
  const {id} = req.params
  const foundUser = users.find((user) => user.id == id)
  res.json(foundUser)
}

const create = (req, res) => {
  const {body} = req
  const newUser = {
    "id": usersLength++,
    ... body
  }
  users.push(newUser)
  res.json(newUser)
}

const update = (req,res) => {
  const {body} = req
  const {id} = req.params
  const user = users.find((user) => user.id == id)
  const updatedUser = {
    ...body,
  }

  users.splice(updatedUser, 1)
  users.push(updatedUser)
  res.json(updatedUser)
}

const erase = (req,res) => {
  const {body} = req
  const {id} = req.params
  const user = users.find((user) => user.id == id)
  const deletedUser = {
    ...body,
  }

  users.splice(deletedUser, 1)
  res.json(users)
}

module.exports = {
  list,
  show,
  create,
  update,
  erase
}