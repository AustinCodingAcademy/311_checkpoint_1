// Local Server Data Files
const userData = require('../data/index');
const sampleUserData = require('../data/sampleUser');

const listUsers = (req, res) => {
  res.json(userData);
}

const showUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const singleUser = userData.find(user => user.id === userId);
  res.json(singleUser);
}

module.exports = { listUsers, showUser }