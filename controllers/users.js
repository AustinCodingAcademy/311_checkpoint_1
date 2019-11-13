const users = require("../data/index")
const newUser = require("../data/sampleUser")

let counter = users.length +1

const get = (req, res) => {
  res.json(users);
}


const getId = (req, res) => {
  let usersId = parseInt(req.params.userId)
  console.log(req.params.userId)
  let usersIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < users.length; i++) {
    if (i + 1 === usersId)  {
      res.json(users[usersIndex])
    }   
  }
}


const post = (req, res) => {
  const newPost = {
    _id: counter,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address
    }
    users.push(newPost); 
    counter = counter++
    console.log(users)
    res.json(users)
}


const put = (req, res) => {
  const foundIndex = users.findIndex(x => x.id == (req.params.userId));
  users[foundIndex].name = req.body.name;
  users[foundIndex].username = req.body.username;
  users[foundIndex].email = req.body.email;
  users[foundIndex].address = req.body.address;

  res.json(users);
  };


const deleteUser = (req, res) => {
  const foundIndex = users.findIndex(x => x.id == (req.params.userId));
  users.splice(foundIndex, 1)

  res.json(users)
  res.send('User Deleted')
}

module.exports = { get, getId, post, put, deleteUser }


