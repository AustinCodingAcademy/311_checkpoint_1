const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

const listUser = (request, response) => {
  console.log('heyoo');
  return response.json(users);
}

const showUser = (request, response) => {
  let userID = request.params.id;
  return response.json(users.find(user => user.id === parseInt(userID)));
}

const createUser = (request, response) => {
  request.body = sampleUser;
  request.body.id = users.length;
  request.body.id++;
  users.push(request.body);
  return response.json(users);
}

const updateUser = (request, response) => {
  let userID = request.params.id;
  request.body = sampleUser;
  request.body.id = userID;
  users[userID - 1] = sampleUser;
  return response.json(users);
}

const deleteUser = (request, response) => {
  let userID = request.params.id;
  users.find(user => user.id === parseInt(userID)).isActive = false;
  return response.json(users);
}

module.exports = { 
  listUser,
  showUser,
  createUser,
  updateUser,
  deleteUser
}