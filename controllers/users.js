let users = require("../data/index");

// get - returns all
exports.listUsers = function list(req, res) {
  return res.json(users);
}

// get by id
exports.showUser = function show(req, res) {
  const found = users.some(users => users.id === parseInt(req.params.id));

  if (found) {
    res.json(users.find(users => users.id === parseInt(req.params.id))); 
  } else {
    res.status(404).json({ msg: `No users with the id of ${req.params.id}`});
  }
}

// post 
exports.createUser = function create(req, res) {
    const newUser = {
      id: ++counter,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.street,
        suite: req.body.suite,
        city: req.body.city,
        zipcode: req.body.zipcode,
        geo: {
          lat: req.body.lat,
          lng: req.body.lng
        }
      },
      phone: req.body.phone,
      website: req.body.website,
      company: {
        name: req.body.name,
        catchphrase: req.body.catchphrase,
        bs: req.body.bs
      }
    }; 
    users.push(newUser);
    res.json(users);
}

exports.updateUser = function update(req, res) {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    const updUser = req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.email = updUser.email ? updUser.email : user.email;
      }
    });
  } else {
    res.status(404).json({ msg: `No user with the id of ${req.params.id}`});
  }
}

exports.deleteUser = function show(req, res) {
  const found = users.some(users => users.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'User deleted',
      users: users.filter(users => users.id !== parseInt(req.params.id))});
  } else {
    res.status(404).json({ msg: `No user with the id of ${req.params.id}`});
  }
}

// module.exports = { list, show, create, update, delete }