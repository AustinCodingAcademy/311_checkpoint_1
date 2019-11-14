
const users = require("../data/index")
const newUser = require("../data/sampleUser")
// const newId = users.length;


// listing users part
const listUsers = (req, res) => {
  res.json(users);
};

// user that matches id
const showUser = (req, res) => {
  let person = users.find(user => user.id == req.params.id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({msg: 'User ${req.params.id} can not be found'})
  }
}

// adds user to array 
const createUser = (req, res) => {
  users.push(newUser);
  res.json(newUser);
};

// updates user in array via id
const updateUser = (req, res) => {
  let person = users.findIndex(i => i.id === parseInt(req.params.id));
  if (person) {
    let update =req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updated.name ? updated.name : user.name;
      }
    });
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: 'User ${req.params.id} is not there'})
  }
}

// deletes a user form array via id
const deleteUser = (req, res) => {
  let person = users.findIndex(i => i.id === parseInt(req.params.id));
  if (person) {
    res.json({msg: 'User deleted', users: users.filter(user => user.id !== parseInt(req.params.id))});
  } else {
    res.status(400).json({msg: 'User ${req.params.id} is not found.'});
  }
}


module.exports = {listUsers, showUser, createUser, updateUser, deleteUser };