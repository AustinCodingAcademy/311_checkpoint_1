const users = require("../data/index")
const sampleUser = require('../data/sampleUser.js')

const listUsers = (req, res) => {
    return res.json(users)
}

const showUser = (req, res) => {
    let userId = req.params.id - 1
    if (users[userId]){
        return res.json(users[userId])
    } 
    else {
        return res.status(400).send("Couldn't find requested user.")
    }
}

const createUser = (req, res) => {
    sampleUser.id = users.length + 1
    users.push(sampleUser)
    return res.json(users[users.length])
}

const updateUser = (req, res) => {
    let userId = req.params.id - 1
    if (users[userId]){
      users[userId].name = sampleUser.name
      return res.json(users[userId])
    } 
    else {
      return res.status(400).send("Couldn't find requested user.")
    }
  }

  const deleteUser = (req, res) => {
    let userId = req.params.id - 1
    if (users[userId]){
      users[userId].isActive = false
      res.send("User has been deleted.") 
    } 
    else {
      return res.status(400).send("Couldn't find requested user.")
    }  
  }

  module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}
