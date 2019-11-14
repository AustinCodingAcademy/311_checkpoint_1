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


module.exports = {displayUsers, showUsers, createUser };
