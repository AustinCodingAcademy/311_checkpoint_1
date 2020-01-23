const users = require('../data/index');
let idCount = 0;

const listUsers = (req, res) => {
  res.send(users);
}

const showUser = (req, res) => {
  let id = req.params.id;
  let user = users.find(user => user.id === id);
  res.json(user);
}

const createUser = (req, res) => {
  let user = req.body;
  idCount = idCount + 1;
  user.id = idCount;
  user.active = true;
  users.push(user);
  res.json(user);
}

const deleteUser = (req, res) => {
  let id = req.params.id;
  let user = users.find(user => user.id === id);
  user.active = false;
}

module.exports = {
  listUsers,
  showUser,
  createUser,
  deleteUser
}