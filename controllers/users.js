const express = require('express')

const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

let counter = users.length;

// Get all users
const listUsers = ('/', (req, res) => {
  res.send(users);
})

// Get one user
const showUser = ('/:id', (req, res) => {
  let user = users.find(user => user.id === Number(req.params.id));
  if (!user) {
    res.statusCode = 404
    res.statusMessage = 'User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  }
  res.send(user);
})

// Post new user
const createUser = ('/', (req, res) => {
  let user = {}
  Object.assign(user, sampleUser)
  user.id = counter += 1;
  users.push(user);
  res.send(users[users.length - 1]);
})

// Update user
const updateUser = ('/:id', (req, res) => {
  let user = users.find(user => user.id === Number(req.params.id));
  if (!user) {
    res.statusCode = 400
    res.statusMessage = 'Bad request. User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  }
  for (const key in user) {
    user[key] = sampleUser[key] ? sampleUser[key] : user[key];
  }
  user.id = Number(req.params.id);
  res.send(user);
})

// Delete user
const deleteUser = ('/:id', (req, res) => {
  let user = users.find(user => user.id === Number(req.params.id));
  if (!user) {
    res.statusCode = 400
    res.statusMessage = 'Bad request. User not found.'
    res.send(`Status Code: ${res.statusCode}. ${res.statusMessage}`)
  } else {
    user.isActive = false;
    res.send('User is deleted.');
  }
})

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };