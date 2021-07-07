const users = require('../data/users');
const sampleUser = require('../data/sampleUser');

// const usernames = require('../data/usernames');
// const locations = require('../data/locations');
// const contact = require('../data/contact');
// const companies = require('../data/companies');

const counter = function() {
  let id = users.length;
  id++;
  return id;
};

exports.listUsers = function listUsers(req,res) {
  return res.json(users);
};

exports.showUser = function showUser(req, res) {
  let usrID = parseInt(req.params.id);
  let user = users.find(arrObj => arrObj.id === usrID);
  if (!user) {
    res.statusCode = 404
    res.statusMessage = 'User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  }
  console.log(user);
  res.json(user);    
};

exports.createUser = function createUser (req,res) {
    let newUser = {}
    Object.assign(newUser, sampleUser);
    newUser.id = counter();
  
  users.push(newUser);
  // companies.push(newUsr.company);
  // locations.push(newUsr.address);
  // contact.push([newUsr.email, newUsr.phone]);
  // usernames.push(`{
  //   id: ${newUsr.id},
  //   name: ${newUsr.name}, 
  //   username: ${newUsr.username}
  // }`)
  console.log(newUser);
  res.json(users);
};

exports.updateUser = function updateUser (req,res) {
  let usrID = parseInt(req.params.id);
  let user = users.find(arrObj => arrObj.id === usrID);
  if (!user) {
    res.statusCode = 404
    res.statusMessage = 'User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  }
    for (const key in user) {
      user[key] = sampleUser[key] ? sampleUser[key] : user[key];
    }
  
  console.log(user);
  res.json(user);
}

exports.deleteUser = function deleteUser(req, res) {
  let usrID = parseInt(req.params.id);
  let user = users.find(arrObj => arrObj.id === usrID);
  user.isActive = false;

  if (!user) {
    res.statusCode = 404
    res.statusMessage = 'User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } 
   
  res.json({msg: 'User Deleted', users: users.filter(user => user.id !== parseInt(req.params.id))});

 res.send('User Deleted');
  
};
