const users = require("../data/index.js");
const sampleUser = require("../data/sampleUser.js");

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  let id = req.params.id - 1;
  if (users[id]) {
    res.json(users[id]);
  } else {
    res.status(404).send("User not found.");
  }
};

const createUser = (req, res) => {
  let counter = users.length;
  let newUser = sampleUser;
  newUser.id = counter + 1;
  users.push(newUser);
  res.json(users[newUser.id - 1]);
};

const updateUser = (req, res) => {
  let id = req.params.id - 1;
  if (users[id]) {
    users[req.params.id - 1] = sampleUser;
    users[req.params.id - 1].id = req.params.id;
    res.json(users[req.params.id - 1]);
  } else {
    res.status(400).send("User not found.");
  }
};

const deleteUser = (req, res) => {
  let id = req.params.id - 1;
  if (users[id]) {
    users.splice(req.params.id - 1, 1);
    res.send(users);
  } else {
    res.status(400).send("User not found.");
  }
};

module.exports = {
  listUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser,
};
