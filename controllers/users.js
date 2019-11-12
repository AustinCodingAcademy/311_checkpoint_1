const users = require("../data/index");
const deletedUsersArr = require("../data/deletedUsers");
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

// update user
updateUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
    const newInfo = {};
    if (req.body.name) newInfo.name = req.body.name;
    if (req.body.username) newInf.username = req.body.username;
    if (req.body.email) newInfo.email = req.body.email;
    if (req.body.address) {
      newInfo.address = Object.assign(user.address, req.body.address)
      // newInfo.address = Object.assign(user.address, req.body.suite)
      // newInfo.address = Object.assign(user.address, req.body.city)
      // newInfo.address = Object.assign(user.address, req.body.zipcode)
    };

    const updatedUser = Object.assign(user, newInfo);

    res.json(updatedUser);
  } else {
    res.status(400).send(`User with ID #${req.params.id} does not exist...`);
  }
};

// delete user
deleteUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user !== undefined) {
    const deletedUserIndex = users.indexOf(user);
    let deletedUser = users.splice(deletedUserIndex, 1);
    deletedUsersArr.push(deletedUser);
    res.json({
      Success: "User has been deleted",
      Users: users,
      Deleted_Users: deletedUsersArr
    });
  } else {
    res.status(400).send(`User with ID #${req.params.id} does not exist`);
  }
};


// //Old update user
// updateUser = (req, res) => {
//   const user = users.find(user => user.id === parseInt(req.params.id));
//   console.log(user);
//   if (user !== undefined) {
//     if (req.body.name) user.name = req.body.name;
//     if (req.body.address. && req.body.address.street) user.address.street = req.body.address.street;
//   }
//   res.json(user);
// };

module.exports = { listUser, showUser, createUser, updateUser, deleteUser };