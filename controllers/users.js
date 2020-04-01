let users = require("../data/index");

// show all the users
const list = (req, res) => {
    res.json(users);
};

// show just one user
const show = (req, res) => {
    let user = users.find(users => users.id == req.params.id);
    if (user) {res.json(user); } else res.send("400: No such user");
};

// add a user
const create = (req, res) => {
    // create an object for the user
    let newuser = req.body;
    // build the response string
    let jsonStr = users;

    // if there's no user, change the response string to a complaint
    if (!newuser) {jsonStr = "400: there's no user!";}
    // otherwise add our user
    else users.push(newuser);

    // return the response string
    res.json(jsonStr);
};

// here's the method to delete a user by their id number
const deleteUser = (req, res) => {
    // set a boolean to tell if the record exists
    let userDeleted = false;

    // get the id of the record to delete
    const userId = req.params.id
    // loop through the array
    users.forEach (function(user) {
      // if you find the id
      if (user.id.toString() === userId.toString()){
          // cut out that record
          users.splice(users.indexOf(user),1);
          userDeleted = true;
      }
    })
    if (userDeleted) {res.json(users);} else res.send("400: no such user")
};

// this is the method to change a user's info
const updateUser = (req,res) => {
    // boolean to show success or not
    let userUpdated = false;
    // store the requested id
    const userId = req.params.id
    // now we want to see what parameters we sent
    // so we know which one(s) to change
    let newInfo = req.body;
  
    // loop through the users array
    users.forEach(function(user) {
      // find the record
      if(user.id.toString()===userId.toString()) {
          users[users.indexOf(user)] = newInfo;
          userUpdated = true;
      }
    })
  
    // send the modified users array back as a response
    if (userUpdated) {res.json(users);} else res.send("400: couldn't find user");
  
  }

module.exports = { list, show, create, deleteUser, updateUser };