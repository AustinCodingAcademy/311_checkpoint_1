const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

const showUser = (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

const listUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const newMember = {
    id: req.body.id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email
  };
  users.push(newMember);
  res.send(users);
};

const updateUser = (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    const updUser = req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updUser.name ? updUser.name : user.name;
        user.email = updUser.email ? updUser.email : user.email;
        user.username = updUser.username ? updUser.username : user.username;

        res.json({ msg: "Member Updated", user });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};
const deleteUser = (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "member deleted",
      users: users.filter(user => user.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};
module.exports = { showUser, listUsers, createUser, updateUser, deleteUser };
