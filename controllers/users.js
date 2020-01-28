const express = require('express');

const users = require("../data/index")
const sampleUser = require('../data/sampleUser')

let counter = users.length

const listUsers = ('/', (req, res) => {
  res.send(users);
})

const showUser = ('/:id', (req, res) => {
  let user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) {
    res.statusCode = 404
    res.statusMessage = 'User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } else {
    res.send(user);
  };
  
})

const createUser = ('/', (req, res) => {
  let user = {}
  Object.assign(user, sampleUser)
  user.id = counter += 1;
  users.push(user);
  res.send(users[users.length - 1]);
})

const updateUser = ('/:id', (req, res) => {
  let user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) {
    res.statusCode = 400
    res.statusMessage = 'Bad request'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } else {
  for (const key in user) {
    user[key] = sampleUser[key] ? sampleUser[key] : user[key];
  } 
  user.id = Number(req.params.id);
  res.send(user);
  }
})

const deleteUser = ('/:id', (req, res) => {
  let user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) {
    res.statusCode = 400
    res.statusMessage = 'Bad Request.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } else {
    user.isActive = false;
    res.send('deleted.');
  }
})

module.exports = {
  listUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser
}