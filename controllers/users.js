const users = require("../data/index")
const newUser = require("../data/sampleUser")


const listUsers = function(req, res) {
  console.log('asew')
  return res.json(users);
}

const showUser = function(req, res) {
 let id = users.find(i => i.id == req.params.id);
 if(id !== -1) {
   res.json(id)
 } else
 res.status(404).json({msg: `User ${req.params.id} doesn't exist`})
}

const createUser = function (req, res) {
  newUser.id = users.length + 1
  users.push(newUser)
  res.json(newUser)
}

const updateUser = function (req, res) {
  let id = users.findIndex(i => i.id == req.params.id);
  console.log(id)
  if(id !== -1) { 
  users[id] = req.body
  } else
  res.status(400).json({msg: `User ${req.params.id} doesn't exist`})

   return res.json(users)
}

const deleteUser = function (req, res) {
  let id = users.findIndex(i => i.id == req.params.id);
  console.log(id)
  if(id !== -1) { 
  users.splice(id, 1) 
  } else
  res.status(400).json({msg: `User ${req.params.id} doesn't exist`})

   return res.json(users)
}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}