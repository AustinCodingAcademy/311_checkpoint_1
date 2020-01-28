const users = require('../data/index')
let userCounter = users.length;

const listUser = (req, res) => {
  res.json(users)
  };

const showUser = (req, res) => {
  const searchId = users.find(user=>
  user.id == req.params.id)
  if(searchId) {
    res.json(searchId)
  } else {
    res.status(404).json({msg: `No users exist with the id of ${req.params.id}`})
  };

const createUser = (req, res) => {
  let newUser = req.body;
  userCounter += 1
  newUser.id = userCounter
  users.push(newUser)
  res.json(users)
  };

  const updateUser = (req, res) => {
    const found = req.params.userId
    const user = users.find(user => {
      return user.found == found
    })
    user.occupation = 'plumber'
    return res.json(user)
  };
    
  const deleteUser = (req, res) => {
    const deleted = req.params.userId
    const userIndex = users.findIndex(user => {
      return user.deleted == deleted
    })
    users.splice(userIndex)
    return res.send('deleted')
  };

  module.exports = { listUser, showUser, createUser, updateUser, deleteUser}}