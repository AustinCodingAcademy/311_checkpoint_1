const users = require("../data/index");
const newUser = require("../data/sampleUser");
const newID = users.length;

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  const right = users.some(x => x.id == req.params.id);
  if (right) {
    res.json(users.filter(i => i.id == req.params.id));
  } else {
    res.status(400).json({ msg: `User ${req.params.id} does not exist` });
  }
};

const createUser = (req, res) => {
  users.push(newUser);
  res.send(newUser);
  console.log(newUser);
};

const updateUser = (req, res) => {
  let right = users.some(x => x.id == req.params.id);
  if (right) {
    let user = users.findIndex(i => i.id == req.params.id);
    users[user] = req.body
    res.json(user);
  } else {
    res.status(404).json({ msg: `User ${req.params.id} does not exist` });
  }
};

const deleteUser = (req, res) => {
  let right = users.some(x => x.id == req.params.id);
  if (right) {
    let user = users.find(i => i.id == req.params.id);
    user.isActive = false;
    res.send(`user ${user} removed`);
  } else {
    res.status(400).json({ msg: `user ${req.params.id}does not exist` });
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
