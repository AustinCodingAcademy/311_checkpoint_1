const express = require('express');
const router = express.Router();
const users = require('../data/index');

// get /users to return all users
router.get('/', (req, res) => {
  res.json(users);
});

//get /users/:id to return user that matches the path param (id)
router.get('/:id', (req, res) => {
  const found = users.some(u => u.id === parseInt(req.params.id));
  
  if (found) {
    let userId = parseInt(req.params.id);
    let aUser = users.find(u => u.id === userId);
    res.json(aUser); 
  } else {
    res.status(404).json({ msg: `No member with id: ${req.params.id}`});
  }
});

//post /users create a new user (sampleUser).
//increment the id so that we always insert the next available id
router.post('/', (req, res) => {
  let id = users.length + 1;
  let newUser = {
    id: id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    website: req.body.website,
    company: req.body.company
  }
  users.push(newUser);
  res.json(users)
});

//put /users/:id to update 1 user match the path param (id)
router.put('/:id', (req, res) => {
  const found = users.some(u => u.id === parseInt(req.params.id));

  if (found) {
    const updUser = req.body;
    users.forEach(u => {
      if(u.id === parseInt(req.params.id)) {
        u.name = updUser.name ? updUser.name : u.name;
        u.username = updUser.username ? updUser.username : u.username;
        u.email = updUser.email ? updUser.email : u.email;
        u.address = updUser.address ? updUser.address : u.address;
        u.phone = updUser.phone ? updUser.phone : u.phone;
        u.website = updUser.website ? updUser.website : u.website;
        u.company = updUser.company ? updUser.company : u.company;

        res.json(users)
      }
    });
  } else {
    res.status(400).json({ msg: `No member with id: ${req.params.id}`});
  }
});

//delete /users/:id to delete one user by its id
router.delete('/:id', (req, res) => {
  const found = users.some(u => u.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'Member deleted',
      users: users.filter(u => u.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No member with id: ${req.params.id}`});
  }
});

module.exports = router