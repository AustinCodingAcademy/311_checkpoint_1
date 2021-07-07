const users = require("../data/index.js")
const sampleUser = require('../data/sampleUser.js')

let listUsers = (req, res) => {
    res.json(users)
}

let showUser = (req, res, next) => {
    let foundUser = users.findIndex(element => element.id == req.params.id)
    if(foundUser > 0) res.json(users[foundUser]) 
    else {
       let err = new Error(`User not found.`)
       err.statusCode = 404
       next(err);
    } 
}

let createUser = (req, res) => {
    let counter = users.length;
    counter++;
    req.body = sampleUser
    req.body['id'] = counter
    users.push(req.body)
    res.json(req.body)
}

let updateUser = (req, res, next) => {
    let foundUser = users.findIndex(element => element.id == req.params.id)
    if (foundUser > 0) {
        users[foundUser] = sampleUser
        res.json(users[foundUser])
    }
    else {
       let err = new Error(`BAD REQUEST, USER CAN'T BE FOUND.`)
       err.statusCode = 400
       next(err);
    }
}

let deleteUser = (req, res, next) => {
    var index = users.findIndex((element) => {element.id ==  req.params.id;})
    if (index > 0) {
        users.slice(index, index++)
        res.send(`Deleted user with ID of ${req.params.id}`);
    }
    else {
        let err = new Error(`BAD REQUEST, USER CAN'T BE FOUND`)
       err.statusCode = 400
       next(err);
    }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }