const users = require('../data/index')

const listUsers = (req, res) => {
  res.json(users);
}
const showUser = (req, res) => {
  // should retrieve just the user that matches the passed-in id
  let user = users.find(user => user.id == req.params.id);
  if (user) {
    res.json(user);
  }
  else {
    res.status(404).send(`There is no user with id: ${req.params.id}`);
  }
}
const createUser = (req, res) => {
  // should add a user to the array
  let newUserID = idCounter + 1;
  idCounter++;
  req.body.id = newUserID;
  users.push(req.body);
  res.send('user added');
}
const updateUser = (req, res) => {
  // should update one user in the array based on its id
  let index = users.findIndex(user => user.id == req.params.id);
  if (index !== -1) {
    for (let prop in req.body) {
      users[index][prop] = req.body[prop];
    }
    res.send('user updated');
  }
  else {
    res.status(400).send(`There is no user with id: ${req.params.id}`);
  }
}
const deleteUser = (req, res) => {
  // should delete one user from the array based on its id
  let index = users.findIndex(user => user.id == req.params.id);
  if (index !== -1) {
    users.splice(index, 1);
    res.send('user removed');
  }
  else {
    res.status(400).send(`There is no user with id: ${req.params.id}`);
  }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };