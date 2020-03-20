const users = require("../data/index");
const sampleUser = require("../data/sampleUser");
const userCounter = users.length;

const listUser = (req, res) => {
  if (!users.length) {
    res.status(404).send("No users found");
  }
  res.json(users);
};

const showUser = (req, res) => {
  const id = req.params.id;
  const foundUsers = users.find(users => users.id === Number(id));
  if (!foundUsers) {
    res.status(404).send("User not found");
  }
  res.json(foundUsers);
};

const createUser = (req, res) => {
  let newUser = {
    _id: userCounter + 1,
    body: req.body.body,
    postId: 1
  };
  comments.push(newUser);
  res.json(users);
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === Number(id));
  if (!user) {
    res.status(404).send("User not found");
  }
  user.name = req.body.name;
  res.json(user);
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === Number(id));
  if (!user) {
    res.status(404).send("User not found");
  }
  const userIndex = users.indexOf(user);
  users.splice(userIndex, 1);
  res.json("User deleted");
};

module.exports = {
  listUser,
  showUser,
  createUser,
  updateUser,
  deleteUser
};
