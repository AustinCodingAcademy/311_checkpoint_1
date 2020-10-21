const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  const found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.send(users.filter((user) => user.id == req.params.id));
  } else {
    res.status(400).json({ msg: 'User not found' });
  }
};

const createUser = (req, res) => {
  counter = users.length;
  const newUser = sampleUser;
  if (!newUser.name || !newUser.username) {
    return res.status(400).json({ msg: 'Please include name and username' });
  }
  users.push(newUser);
  res.json(users);
};

const updateUser = (req, res) => {
  const updateUser = req.body;
  users.forEach((user) => {
    if (user.id === parseInt(req.params.id)) {
      if (user.name != updateUser.name) {
        user.name = updateUser.name;
      } else {
        return user.name;
      }
    }
  });
  res.json(users);
};

const deleteUser = (req, res) => {
  const found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.json({
      message: "Deleted",
      users: users.filter((user) => user.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(404).json({ msg: 'User not found' });
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };