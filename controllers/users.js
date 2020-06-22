const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  const found = users.some((user) => user.id == req.params.id);

  if (found) {
    res.json(users.filter((user) => user.id == req.params.id));
  } else {
    res.status(404).json({ msg: "Bad Request" });
  }

  
};

const createUser = (req, res) => {
  let counter = users.length;
  counter++;

  let newUser = {
    id: counter,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city,
      zipcode: req.body.address.zipcode,
      geo: {
        lat: req.body.address.geo.lat,
        lng: req.body.address.geo.lng,
      },
    },
    phone: req.body.phone,
    website: req.body.website,
    company: {
      name: req.body.company.name,
      catchPhrase: req.body.company.catchPhrase,
      bs: req.body.company.bs,
    },
  };

  users.push(newUser);
  res.json(users);
};

const updateUser = (req, res) => {
  const found = users.some((user) => user.id == req.params.id);

  if (found) {
    users.forEach((user) => {
      if (user.id == req.params.id) {
        user.name = req.body.name;
      }
      res.send(`User updated`);
    });
  } else {
    res.status(400).json({ msg: "Bad Request" });
  }

};

const deleteUser = (req, res) => {
  const found = users.some((user) => user.id == req.params.id);

  if (found) {
    users.forEach((user) => {
      if (user.id == req.params.id) {
        res.send("User Deleted");
      }
    });
  } else {
    res.status(400).json({ msg: "Bad Request" });
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
