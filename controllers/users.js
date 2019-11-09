const users = require("../data/index");
const deletedUsers = require('../data/deletedUsers')
//list all users
listUser = (req, res) => {
  res.json(users);
};
// list one user by ID
showUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
    res.json(user);
  } else {
    res.json({ msg: `User ID #${req.params.id} does not exist...` });
  }
};
// create new user
createUser = (req, res) => {
  let counter = users.length;
  let userInput = req.body;
  const newUser = {
    id: counter + 1,
    name: userInput.name,
    username: userInput.username,
    email: userInput.email,
    address: {
      street: userInput.address.street,
      suite: userInput.address.suite,
      city: userInput.address.city,
      zipcode: userInput.address.zipcode,
      geo: {
        lat: userInput.address.geo.lat,
        lng: userInput.address.geo.lng
      }
    },
    phone: userInput.phone,
    website: userInput.website,
    company: {
      name: userInput.company.name,
      catchPhrase: userInput.company.catchPhrase,
      bs: userInput.company.bs
    }
  };
  users.push(newUser);
  res.json(users);
};

updateUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  console.log(user)
  res.json('Linked updateUser')
};

deleteUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  if(user !== undefined){
    const deleteUserIndex = users.indexOf(user);
    let spliced = users.splice(deleteUserIndex, 1)
    deletedUsers.push(spliced)
    res.json(users)
  } else {
    res.json({msg: `User with ID #${req.params.id} does not exist...`})
  }
};

module.exports = { listUser, showUser, createUser, updateUser, deleteUser };
