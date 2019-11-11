const users = require('../data/index');

// getAllUsrs, getUsr, makeUsr, updtUsr, rmvUsr

// Get all users
exports.getAllUsrs = function getAllUsrs(req, res) {
  res.json(users);
}

// Get one user
exports.getUsr = function getUsr(req, res) {
  let user = users.find(i => i.id == req.params.id);
  res.json(user);
}

// Make a users
exports.makeUsr = function makeUsr(req, res) {
  let body = req.body;
  let newUsr = {
    id: users.length + 1,
    name: body.name,
    username: body.username,
    email: body.email,
    address: {
      street: body.address.street,
      suite: body.address.suite,
      city: body.address.city,
      zipcode: body.address.zipcode,
      geo: {
        lat: body.address.geo.lat,
        lng: body.address.geo.lng
      }
    },
    phone: body.phone,
    website: body.website,
    company: {
      name: body.company.name,
      catchPhrase: body.company.catchPhrase,
      bs: body.company.bs
    }
  }

  users.push(newUsr);

  res.json({msg: `New User, ${newUsr.name}, was added`});
}

// Update a user
exports.updtUsr = function updtUsr(req, res) {
  const found = users.find(usr => usr.id === parseInt(req.params.id));

  if(found) {
    const updated = req.body;
    users.forEach(user => {
      if(user.id === parseInt(req.params.id)) {
        user.name = updated.name ? updated.name : users.name;
        user.username = updated.username ? updated.username : users.username;
        user.email = updated.email ? updated.email : users.email;
        users.address = updated.address ? updated.address : users.address;
        users.phone = updated.phone ? updated.phone : users.phone;
        users.website = updated.website ? updated.website : users.website;
        users.company = updated.company ? updated.company : users.company;

        res.json({msg: 'User updated', user});
      }
    });
  } else {
    res.status(400).json({msg: `No member with the id of ${req.params.id} was found.`});
  }
}

// Remove a user
exports.rmvUsr = function rmvUsr(req, res) {
  let usr = users.find(user => user.id === parseInt(req.params.id));

  if(usr) {
    usr.isActive = false;
    res.json({
      msg: 'User deleted',
      users: users
    })
  } else {
    res.status(400).json({msg: `No member with the id of ${req.params.id} was found.`})
  }
}