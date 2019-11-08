const express = require("express");
const router = express.Router();
const users = require("../data/index");

router.get("/users", (req, res) => {
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
    res.json(user);
  } else {
    res.json({ msg: `User ID #${req.params.id} does not exist...` });
  }
});

router.post("/users", (req, res) => {
  let counter = users.length;
  let userInput = req.body;
  const newUser = {
    id: counter + 1,
    name: userInput.name,
    username: userInput.username,
    email: userInput.email,
    address: {
      street: userInput.address.street,
      suite: userInput.address.suite,
      city: userInput.address.city,
      zipcode: userInput.address.zipcode,
      geo: {
        lat: userInput.address.geo.lat,
        lng: userInput.address.geo.lng
      },
    },
    phone: userInput.phone,
    website: userInput.website,
    company: {
      name: userInput.company.name,
      catchPhrase: userInput.company.catchPhrase,
      bs: userInput.company.bs
    },
  };
  users.push(newUser);
  res.json(users)
  
});

router.put("/users/:id", (req, res) => {});

router.delete("/users/:id", (req, res) => {});

module.exports = router;
