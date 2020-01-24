const users = require('../data/index')

//* listUsers
// Should retrieve the entire array from _data/index_
const list = (req,res) =>res.json(users)
// * showUser
// * Should retrieve just the user that matches the passed-in id
const show = (req, res) => {
  let userFound = users.find(x => x.id == req.params.id)
  // console.log(commentId, commentFound)
  res.json(userFound)
};

// * createUser
// * Should add a user to the array
const create = (req, res) => {
  // let newContact = req.body;
  // contacts.push(newContact)
  // res.json(newContact)
  let counter = users.length;
  let newUser = req.body
      newUser.id = counter+1,
  
  users.push(newUser)
  // counter = counter + 1
  res.json(users)
  // console.log(newUser)
};

// * updateUser
// * Should update one user in the array based on its id
const update = (req,res) => {

  let userFound = users.find(x => x.id == req.params.id)
  userFound.name = req.body.name
  res.json(userFound)
}
// * deleteUser
// * Should delete one user from the array based on its id

const deleteUser = (req, res) => {
  let userFound = users.find(x => x.id == req.params.id)
  if(!userFound){
res.status(404).send("User not found")
  }else{
    let userIndex = users.indexOf(userFound)
  users.splice(userIndex, 1)
  res.json(`User ${userFound.name} has been  deleted`)
  }
}
module.exports = { list, show, create, update, deleteUser }
