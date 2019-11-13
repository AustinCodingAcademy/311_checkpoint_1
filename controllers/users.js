let users = require('../data/index')
let newUser = require('../data/sampleUser')
let newId = users.length;

const listUsers = (req, res) => {
    res.json(users);
}

const showUser = (req, res) => {
    let validId = users.some(x => x.id == req.params.id)
    if(validId){
        res.json(users.filter(i => i.id == req.params.id)) 
    } else {
        res.status(404).json({msg: `User ${req.params.id} does not exist`})
    }
}

const createUser = (req, res) => {
    users.push(newUser)
    res.json(newUser)
}

const updateUser = (req, res) => {
    let validId = users.some(x => x.id == req.params.id)
    if (validId){
        let user = users.find(i => i.id == req.params.id)
        validId.id = newId++
        res.json(user)
    } else{
        res.status(404).json({msg: `User ${req.params.id} does not exist`})
    }
}

const deleteUser = (req, res) => {
    let validId = users.some(x => x.id == req.params.id)
    if (validId){
        let user = users.find(i => i.id == req.params.id)
        user.isActive = false;
        res.send(`user ${user} removed`)
    } else {
        res.status(400).json({msg: `user ${req.params.id} does not exist`})
    }
}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};