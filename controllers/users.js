const users = require("../data/index");
const sampleuser = require("../data/sampleUser");

exports.listUsers = (req, res) => {
  res.json(users);
};

exports.showUser = (req, res) => {
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  const suser = users.find(user => user.id == parsedId);
  //   console.log(suser)
  res.json(suser);
};

exports.createUser = (req, res) => {
  users.push(sampleuser);
  res.send(sampleuser);
};

exports.updateUser = (req, res) => {
  const userFound = users.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    let updatedUser = req.body;
    console.log(userFound);
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        //user.name = updatedUser.name ? updatedUser.name : user.name;
      }
    });
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
    console.log(updatedUser);
  }
};

const deleteUser = (req, res) => {
  //code here
};
