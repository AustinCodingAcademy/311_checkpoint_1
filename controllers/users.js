const users = require('../data/index');
const sampleUsers = require('../data/sampleUser');

function displayUsers(request,response) {
  return response.json(users);
}

function showUsers(request, response) {
  let foundusers = users.find(function(element){
    return users._id == req.params.id
  })
  response.json(foundusers)
}

function createUser(request, response){
  req.body._id = users.length + 1
  users.push(req.body)
  resizeBy.json(users)
}

function updateUser(request, response){
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
  users[id] = req.body
  } else
  res.status(400).json({msg: 'User ${req.params.id} doesnt exist'})
  return res.json(users)
  }
  
function deleteUser (request, response){
  const user = users.find(user => user.id === parseInt(req.params.id));
  if(user !== undefined) {
  users.splice(user, 1)
  } else
  res.status(400).json({msg: 'User ${req.params.id} doesnt exist'})
  return res.json(users)
  }
module.exports = {displayUsers, showUsers, createUser,updateUser, deleteUser};
