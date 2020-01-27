const express = require('express')
const sampleUser = require('../sampleUser')
const  users  = require('../../data/index')

let counter = users.length;

//Get All Items
const listUsers = (req,res) => {
  res.json(users)
}

//listUsers
const showUser = (req, res) => {
  let userId = req.params.id;
  let user = users.find(item => item.id === Number(userId));
  if (!user) {
    res.statusCode = 404
    res.statusMessage = 'User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } else {
  res.json(user)
}
}

//Create One Comment
const createUser = (req, res) => {
  sampleUser.id = counter +=1;
  users.push(sampleUser)
  res.json(users)
}

const updateUser = (req, res) => {
  let userId = req.params.id;
  let user = users.find(item => item.id === Number(userId));
  if (!user) {
    res.statusCode = 400
    res.statusMessage = 'Bad Request.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } else {
    for (const key in user) {
    user[key] = sampleUser[key] ? sampleUser[key] : user[key];
    }
    user.id = Number(userId)
  res.json(user)
}
}

const deleteUser = (req, res) => {
  let userId = req.params.id;
  let user = users.find(item => item.id === Number(userId));
  if (!user) {
    res.statusCode = 400
    res.statusMessage = 'Bad Request.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  }
  else {
  user.isActive = false;
  res.json('Deleted')
  }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser}



