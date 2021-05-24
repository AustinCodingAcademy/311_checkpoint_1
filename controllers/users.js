const users = require("../data/index.js");
const sampleUser = require('../data/sampleUser.js');

function getAllUsers (req, res) {
    if (users.length == 0) {
        res.status(404).send({error : "You've deleted every user? Seriously?"})
    } else {
        res.json(users);
    }
    
    
}

function getUser (req, res) {
    let userFound = 0;
    for (let x = 0; x < users.length; x++) {
        if (users[x].id == req.params.id) {
            res.json(users[x]);
            return userFound = 1;
        }
    }
    if (userFound != true) {
        res.status(400).send({error : "This user doesnt exist."})
    }
}

function postUser (req, res) {
    var userId = users.length + 1;
    users.push(sampleUser);
    users[userId - 1].id = userId;
    res.json(users[userId - 1]);

}

function putUser (req, res) {
    if(users[req.params.id -1] == null) {
        res.status(400).send({error : "This user doesnt exist"})
    } else {
        users[req.params.id - 1].id = sampleUser.id;
        res.json(users[req.params.id - 1]);
    }
    
}

function deleteUser (req, res) {
    if (users[req.params.id - 1] == null) {
        res.status(400).send({error : "This user doesnt exist."});
    } else {
        users.splice(req.params.id - 1, 1);
        res.json(users);
    }
    
}

module.exports = {getAllUsers, getUser, postUser, putUser, deleteUser};