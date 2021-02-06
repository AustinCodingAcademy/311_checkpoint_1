const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  let id = req.params.id - 1;
  if (users[id]===undefined) {
    res.status(404).send("User not found.");
  }else {
    res.json(users[id]);
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
  if (users[id-1]===undefined) {
    res.status(400).send("User not found.");
  }else {
    users[id] = req.body;
    users[id].id = id;
    res.json(users[id]);
  }
};

const deleteUser = (req, res) => {
  let id = req.params.id;
  if (users[id-1]===undefined) {
    res.status(400).send("User not found.");
  }else { 
    users.splice(id, 1);
    res.json(`USER ${id} DELETED`);
    
  }
};

module.exports = {
  listUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser,
};