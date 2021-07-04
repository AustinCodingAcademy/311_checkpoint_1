const users = require("../data/index");
const newUser = require("../data/sampleUser");
const newId = users.length;

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  let person = users.find(user => user.id == req.params.id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({
      msg: `User ${req.params.id} is not found.`
    });
  }
};

const createUser = (req, res) => {
  users.push(newUser);
  res.send(newUser);
};

const updateUser = (req, res) => {
  let found = users.some(i => i.id === parseInt(req.params.id));
  if (found) {
    let updated = req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updated.name ? updated.name : user.name;
      }
    });
    res.json(users.filter(user => user.id === parseInt(req.param.id)));
  } else {
    res.status(400).json({
      msg: `User ${req.params.id} is not found.`
    });
  }
};

const removeUser = (req, res) => {
  let found = users.some(i => i.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: `User has been deleted`,
      users: users.filter(user => user.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({
      msg: `User ${req.params.id} is not found.`
    });
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, removeUser };
