const users = require('../data/index')
let userCounter = users.length;

const listUsers = (req, res) => {
  res.json(users)
};


const showUser = (req, res) => {
  const findById = users.find(user=>user.id == req.params.id)
  if(findById) {
    res.json(findById)
  } else {
    res.status(404).json({msg: `No users with the id of ${req.params.id}`})
  }
  
};

const createUser = (req, res) => {
  let newUser = req.body;
    userCounter += 1
    newUser.id = userCounter
    users.push(newUser)
    res.json(users)
  };

  const updateUser = (req, res) => {
    updUser = req.body
    let found = users.find(users => users.id = req.params.id);
    if(found) {
      for(const property in found) {
        found[property] = req.body[property] ? req.body[property] : found[property]
      }
      res.json({msg: 'User updated', users})
    } else {
      res.status(400).json({msg: `No user with the id of ${req.params.id}`})
    }
  };

  const deleteUser = (req, res) => {
    const found =  users.find(users => users.id = req.params.id);

  if(found) {
  res.json({msg: 'deleted',
   users: users.filter(users => users.id != req.params.id)
  });
  } else {
    res.status(400).json({msg: `No users with the id of ${req.params.id}`})
  } 
  };

  module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}