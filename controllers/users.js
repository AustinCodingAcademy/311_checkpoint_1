const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  const userFound = users.find((user) => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res
      .status(404)
      .json({ msg: `User with the ID of ${req.params.id} not found!` });
  }
};

const createUser = (req, res) => {
  let counter = users.length + 1;
  const newUser = req.body;
  newUser.id = counter;
  users.push(newUser);
  res.json({ msg: "A new user has been added!", user: newUser });
};

const updateUser = (req, res) => {
  const userFound = users.find((user) => user.id === parseInt(req.params.id));

  if (userFound) {
    const updUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updUser.name ? updUser.name : user.name;
        user.username = updUser.username ? updUser.username : user.username;
        user.email = updUser.email ? updUser.email : user.email;
        user.address = updUser.address ? updUser.address : user.address;
        user.phone = updUser.phone ? updUser.phone : user.phone;
        user.website = updUser.website ? updUser.website : user.website;
        user.company = updUser.company ? updUser.company : user.company;

        res.json({
          msg: `Success! User ${req.params.id} has been updated!`,
          user,
        });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `User with the ID of ${req.params.userId} not found!` });
  }
};

const deleteUser = (req, res) => {
  const userFound = users.find((user) => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json(users.filter((user) => user.id !== parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `User with the ID of ${req.params.id} not found!` });
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
