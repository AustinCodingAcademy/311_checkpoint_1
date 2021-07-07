const users = require("../data/index")
const newUser = require("../data/sampleUser")

let counter = users.length +1

const get = (req, res) => {
  res.json(users);
}


const getId = (req, res) => {
  let usersId = parseInt(req.params.userId)
  let getUser = users.find(user => user.id == usersId)
    // console.log(getUser)
  if(getUser) {
    res.json(getUser)
  } else {
    res.status(400).json({msg: `User ${req.params.id} not found`})
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
  let usersId = parseInt(req.params.userId)
  let person = users.some(user => user.id == usersId)

  if (person) {
    let updated = req.body;
    users.forEach(user => {
  if (user.id === usersId) {
      user.name = updated.name ? updated.name : user.name;
      user.username = updated.username ? updated.username : user.username;
      user.email = updated.email ? updated.email : user.email;
      user.address = updated.address ? updated.address : user.address;
  }
  });
    res.json(users.filter(user => user.id === usersId));
  } else {
    res.status(400).json({
    msg: `User ${req.params.id} not found`})
  }
  };


const deleteUser = (req, res) => {
  let usersId = parseInt(req.params.userId)
  const foundIndex = users.findIndex(user => user.id == usersId) 
  if (foundIndex >-1) {
    res.json({
      msg: `User has been deleted`, 
      users: users.splice(foundIndex, 1) 
    });
  } else {
    res.status(400).json({
    msg: `User ${req.params.id} not found`})
  }
}

module.exports = { get, getId, post, put, deleteUser }


