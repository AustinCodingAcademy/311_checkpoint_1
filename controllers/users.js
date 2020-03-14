
// Users Controllers File

const users = require("../data/index");
const sampleUser = require("../data/sampleUser");


// * listUsers * Should retrieve the entire array from _data/index_
function listUsers (req,res) {

    // Error Handeling
    if (!users) {
        res.status(404).send('No users found')
      }
    
    res.json(users);

};


// * showUser * Should retrieve just the user that matches the passed-in id
function showUser (req, res) {
    let myid = req.params.id;
    let foundUser = users.find(x => x.id == myid);
    console.log(foundUser)

    // Error Handeling
    if (foundUser == undefined) {
        res.status(404).send('No user with that ID found')
    }
    
    res.json(foundUser);

}


// * createUser * Should add a user to the array
function createUser (req, res) {
    req.body = sampleUser;
    // console.log(sampleUser);
    users.push(sampleUser);

    // Error Handeling
    if (!sampleUser) {
        res.status(404).send('Cannot find the sample user, did you connect your data file at the top of the controllers file?')
    }

    console.log("user created successfully")
    res.json(sampleUser);

}


// * updateUser * Should update one user in the array based on its id
function updateUser (req, res) {
    let myid = req.params.id
    let foundIndex = users.findIndex(x => x.id == myid);
    users[foundIndex] = sampleUser;

    // Error Handeling
    if (foundIndex == -1) {
        res.status(404).send('No user with that ID found')
    }

    res.send("user successfully updated, GET users to see updated list");
}


// * deleteUser * Should delete one user from the array based on its id
function deleteUser (req, res) {
  let myid = req.params.id
  let foundIndex = users.findIndex(x => x.id == myid);
  console.log(foundIndex)
  users.splice(foundIndex,1);

    // Error Handeling
    if (foundIndex == -1) {
        res.status(404).send('No user with that ID found')
    }

  res.send("deleted -jte")
}



module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}