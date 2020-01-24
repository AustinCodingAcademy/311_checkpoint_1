const users = require('../data/index');
let idCount = users.length;

const listUsers = (req, res) => {
  res.send(users);
}

const showUser = (req, res) => {
  let user = users.find(user => user.id === parseInt(req.params.id));
  if(!user) {
    res.status('404').send('user not found')
  }
  res.json(user);
}

const createUser = (req, res) => {
  let user = req.body;
  let userNameExists = users.find(user => user.username === req.body.username);
  let emailExists = users.find(user => user.email === req.body.email);

  if(userNameExists) {
    return res.status(400).send('username already exists');
  }

  if(emailExists) {
    return res.status(400).send('email already exists');
  }

  if (!user.name) {
    return res.status(400).send('user must have a name')
  }

  if(!user.username) {
    return res.status(400).send('user must have a username')
  }

  if(!user.email) {
    return res.status(400).send('user must have email')
  }

  idCount = idCount + 1;
  user.id = idCount;
  user.active = true;
  users.push(user);
  res.json(user);
}

const deleteUser = (req, res) => {
  let userIndex = users.findIndex(user => user.id == req.params.id)
  if(userIndex === -1) {
    return res.status(404).send('user not found')
  }
  let deleted = users.splice(userIndex, 1);
  res.json(deleted)
}

module.exports = {
  listUsers,
  showUser,
  createUser,
  deleteUser
}