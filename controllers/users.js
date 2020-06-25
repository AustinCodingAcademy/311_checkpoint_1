const users = require('../data/index');
const sampleUser = require('../data/sampleUser');
const counter = users.length;

const listUsers = (req, res) => {
  res.send(users);
}

const showUser = (req, res) => {
  let i = req.params.id -1;

  if (!users[i]) {
    res.status(400).send({ message: "User does not exist"})
  }

  res.send(users[i]);
}

const createUser = (req, res) => {
  users.push(sampleUser);
  sampleUser.id = counter +1;
  res.send(users);
}

const updateUser = (req, res) => {
  let i = req.params.id -1;

  if (!users[i]) {
    res.status(400).send({ message: "User does not exist"});
  }

  users.splice(i, 1, sampleUser);
  sampleUser.id = i + 1;
  res.send(users[i]);
}

const deleteUser = (req, res) => {
  let i = req.params.id -1;

  if (!users[i]) {
    res.status(400).send({ message: "User does not exist" });
  }

  users.splice(i, 1);
  res.send(users);
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }