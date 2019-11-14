const users = require('../data/index')
const newUser = require('../data/sampleUser')


const listUsers = (req, res) => {
return res.json(users);
}

showUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
    res.json(user);
  } else {
    res.status(400).send(`User with ID #${req.params.id} does not exist...`);
  }}

createUser = (req, res) => {
  newUser.id = users.length + 1
  users.push(newUser)
  res.json(newUser)
}

updateUser =  (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if(user !== undefined) { 
  users[id] = req.body
  } else 
  res.status(400).json({msg: `User ${req.params.id} doesn't exist`})
  return res.json(users)
}

deleteUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if(user !== undefined) { 
  users.splice(user, 1) 
  } else
  res.status(400).json({msg: `User ${req.params.id} doesn't exist`})

   return res.json(users)
}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};