let users = require("../data/index");
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
    throw new Error("User was not found");
  }
  res.json(user);
};

userCounter = users.length
const create = (req, res) =>{
    let newUser = {
        //one body for the obj inside data and one on the webpage
        _id: userCounter + 1,
        body: req.body.body,
    }
    comments.push(newUser)
}


const update = (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === Number(id));
  user.name = req.body.name;
  user.username = req.body.username;
  if (!user) {
    throw new Error("User was not found");
  }
  res.json(user);
  //console.log(users)
};

const DELETE = (req, res) => {
    const id = req.params.id;
 
    let contact = contact.filter(user => {
      return (user.id = req.id);
    })[0];
    const index = user.indexOf(user);
    user.splice(index, 1);
    //console.log(users)
    res.json(user);

  if (!user) {
    throw new Error("User was not found");
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