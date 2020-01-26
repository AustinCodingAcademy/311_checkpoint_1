const users = require('../data/index')
const newUser = require('../data/sampleUser')

const listUsers = (req, res) => {
return res.json(users);
}

getUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
    res.json(user);
  } else {
    res.status(400).send(`User with the ID #${req.params.id} does not exist.`);
  }}

createUser = (req, res) => {
  newUser.id = users.length + 1
  users.push(newUser)
  res.json(newUser)
}

updateUser =  (req, res) => {

  const user = users.find(user => user.id === parseInt(req.params.id));
  if(user !== undefined) { 
  let partialUserData = req.body;
  Object.assign(user, partialUserData)
  } else 
  res.status(400).json({msg: `User ${req.params.id} doesn't exist.`})
  return res.json(users)
}

deleteUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  // Option to only disable the User without deleting it: 
  // let disableUser = [];
  // disableUser["isActive"] = "false";

  // let user = users.find(p=>p._id == req.params.userIds);
  // Object.assign(user, disableUser)

  if(user !== undefined) { 
  users.splice(user, 1) 
  } else
  res.status(400).json({msg: `User ${req.params.id} has been deleted.`})

   return res.json(users)
}

module.exports = {listUsers, getUser, createUser, updateUser, deleteUser};