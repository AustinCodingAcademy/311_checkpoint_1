const users = require("../data/index")
const newUser = require("../data/sampleUser")

let counter = users.length +1

const get = (req, res) => {
  res.json(users);
}


const getId = (req, res) => {
  let usersId = parseInt(req.params.userId)
  if (usersId) {
  let usersIndex = parseInt(req.params.userId) - 1;
  for (let i = 0; i < users.length; i++) {
    if (i + 1 === usersId)  {
      res.json(users[usersIndex])
      }   
    }
  }  else {
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
  let person = users.some(user => user.id === parseInt(req.params.id))
  if (person) {
    let updated = req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updated.name ? updated.name : user.name
      }
    });
    // users[foundIndex].name = req.body.name;
    // users[foundIndex].username = req.body.username;
    // users[foundIndex].email = req.body.email;
    // users[foundIndex].address = req.body.address;
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `User ${req.params.id} not found`})
  }
  };



const deleteUser = (req, res) => {
  const foundIndex = users.findIndex(x => x.id === parseInt(req.params.id));

  if (foundIndex) {
    res.json({
      msg: `User has been deleted`, 
      users: users.splice(foundIndex, 1)
    })
  } else {
    res.status(400).json({msg: `User ${req.params.id} not found`})
  }
}

module.exports = { get, getId, post, put, deleteUser }


