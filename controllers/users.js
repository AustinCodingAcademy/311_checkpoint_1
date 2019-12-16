let users = require("../data/index");
const newUser = require("../data/sampleUser");
const express = require("express");
const app = express();
let userCounter = users.length;

const list = (req, res) => {
  res.json(users);
};

const show = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = users.find(user => user.id === Number(id));

  if (!user) {
    throw new Error("No User Found");
  }
  res.json(user);
};

const create = (req, res) => {
  console.log(newUser);

  newUser.id = userCounter + 1;
  users.push(newUser);
  if (!user) {
    throw new Error("No User Found");
  }
  res.json(users);
};

const update = (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === Number(id));
  user.name = req.body.name;
  user.username = req.body.username;
  if (!user) {
    throw new Error("No User Found");
  }
  res.json(user);
};

const DELETE = (req, res) => {
  //Whats the proper way to remove a user from a
  const id = req.params.id;
  const filteredUsers = users.filter(user => user.id != Number(id));
  users = filteredUsers;

  if (!user) {
    throw new Error("No User Found");
  }
  res.json(users);
};

module.exports = {
  list,
  show,
  create,
  update,
  DELETE
};
