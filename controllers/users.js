const users = require('../data/users')
let userCounter = users.length;

const listUser = (req, res) => {
  res.json(users)
  };

const showUser = (req, res) => {
  let idSearched = req.params.id
  const user = users.find(user => 
  user._id == idSearched)
  res.json(user)
};

const createUser = (req, res) => {
  let user = req.body;
  userCounter += 1
  user.id = userCounter
  users.push(user)
  res.json(users)
  };

  const updateUser = (req, res) => {
    const id = req.params.userId
    const user = users.find(user => {
      return user.id == id
    })
    user.occupation = 'plumber'
    return res.json(user)
  };
    
  const deleteUser = (req, res) => {
    const id = req.params.userId
    const userIndex = users.findIndex(user => {
      return user.id == id
    })
    users.splice(userIndex)
    return res.send('deleted')
  };

  module.exports = { listUser, showUser, createUser, updateUser, deleteUser}