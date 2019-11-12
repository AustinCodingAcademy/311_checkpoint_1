const users = require("../data/index")
const newUser = require("../data/sampleUser")
const newId = users.length

const listUsers = (req, res) => {
  res.json(users);
}

const showUser = (req, res) => {
 let person = users.find(user => user.id == req.params.id);
 if(person) {
  res.json(person);
 }
 else {
   res.status(404).json({
     msg: `User ${req.params.id} is not found.`
   })
 }
}

const createUser = (req, res) => {
  users.push(newUser);
  res.send(newUser);
}

const updateUser = (req, res) => {
  let found = users.some(i => i.id == req.params.id)
  if(found){
    let person = users.find(user => user.id == req.params.id);
    found.id = newId ++;
    res.json(person)
  }
  else {
    res.status(400).json({
      msg: `User ${req.params.id} is not found.`
    })
  }
}

const removeUser = (req, res) => {
  let found = users.some(i => i.id == req.params.id)
  if(found){
    let person = users.find(user => user.id == req.params.id);
    person.isActive = false;
    res.send(`User ${person} removed`)
  }
  else {
    res.status(400).json({
      msg: `User ${req.params.id} is not found.`
    })
  }
}

module.exports = {listUsers, showUser, createUser, updateUser, removeUser}