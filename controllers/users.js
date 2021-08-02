const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

// Should retrieve the entire array from _data/index_

const listUsers = (req, res) => {
  res.json(users)
}

// Should retrieve just the user that matches the passed-in id
const showUser = (req, res) => {
  let id = req.params.id -1
  if (users[id]){
    return res.json(users[id])
  } else {
    res.status(404).send({ msg: `User with the ID of ${req.params.id} not found!` })
  }
}

// Should add a user to the array
const createUser = (req, res) => {
  let counter = users.length
  let newUser = sampleUser
  newUser.id = counter + 1
  users.push(newUser)
  return res.json(users[counter])
}

// Should update one user in the array based on its id
const updateUser = (req, res) => {
  let targetId = req.params.id -1
  if (users[targetId]){
    users[targetId].name = sampleUser.name
    return res.json(users[targetId])
  } else {
    res.status(400).send({ msg: `User with the ID of ${req.params.id} not found!` })
  }
}

// Should delete one user from the array based on its id
const deleteUser = (req, res) => {
  let targetId = req.params.id -1
  if (users[targetId]){
    users[targetId].isActive = false
    res.send("Deleted") 
  } else {
    res.status(400).send({ msg: `User with the ID of ${req.params.id} not found!` })
  } 
}

module.exports = {
  listUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser
};