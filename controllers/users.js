const users = require('../data/index');

//retrieve the entire array from data/index
const listUsers = (req, res) => {
  res.json(users);
}

//retrive the user that matches the passed-in id
const showUser = (req, res) => {
  const found = users.some(u => u.id === parseInt(req.params.id));
  
  if (found) {
    let userId = parseInt(req.params.id);
    let aUser = users.find(u => u.id === userId);
    res.json(aUser); 
  } else {
    res.status(404).json({ msg: `No member with id: ${req.params.id}`});
  }
}

//add a user to the array
const createUser = (req, res) => {
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
}

//update one user in the array based on its id
const updateUser = (req, res) => {
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
}

//delete one user from teh array based on its id
const deleteUser = (req, res) => {
  const found = users.some(u => u.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'Member deleted',
      users: users.filter(u => u.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No member with id: ${req.params.id}`});
  }
}

module.exports = {
  listUsers, showUser, createUser, updateUser, deleteUser
};