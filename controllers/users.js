// Local Server Data Files
const userData = require('../data/index');
const sampleUserData = require('../data/sampleUser');

const listUsers = (req, res) => {
  res.json(userData);
}

const showUser = (req, res) => {
  const userId = parseInt(req.params.id);

  if(userId < userData.length + 1) {
    const singleUser = userData.find(user => user.id === userId);
    res.json(singleUser);
  } else {
    // Error Handling
    res.send("ERROR 400 (Bad Request - User does not Exist)")
  }
}

const createUser = (req, res) => {
  const newId = userData.length + 1
  const newUser = sampleUserData;
  newUser.id = newId;
  userData.push(newUser);
  res.json(userData);
}

// Change Address of user:id (They Moved in with Brett in sampleUser)
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id)

  if(userId < userData.length + 1) {
  const singleUser = userData.find(user => user.id === userId);
  const newAddress = sampleUserData.address;
  singleUser.address = newAddress;
  res.json(singleUser)
  } else {
    // Error Handling
    res.send("ERROR 400 (Bad Request - User does not Exist)")
  }
}

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id)
 
  if(userId < userData.length + 1) {
  const singleUser = userData.find(user => user.id === userId);
  const deletePoint = userData.indexOf(singleUser)
  userData.splice(deletePoint, 1);
  res.json(userData);
  } else {
    // Error Handling
    res.send("ERROR 400 (Bad Request - User does not Exist)")
  }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }