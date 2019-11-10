const users = require("../data/index");
const deletedUsersArr = require('../data/deletedUsers')
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
  const user = users.find(user => user.id === parseInt(req.params.id))
  if(user !== undefined){
    let oldInfo = user;
    let newInfo = req.body;
    if(newInfo.name ? oldInfo.name = newInfo.name : oldInfo.name);
    if(newInfo.username ? oldInfo.username = newInfo.username : oldInfo.username);
    if(newInfo.email ? oldInfo .email = newInfo.email : oldInfo .email);
    // if(newInfo.address.street !== undefined ? oldInfo.address.street = newInfo.address.street : oldInfo.address.street);
    // if(newInfo.address.suite ? oldInfo .address.suite = newInfo.address.suite : oldInfo.address.suite);
    // if(newInfo.address.city ? oldInfo.address.city = newInfo.address.city : oldInfo.address.city);
    // if(newInfo.address.zipcode ? oldInfo.address.zipcode = newInfo.address.zipcode : oldInfo.address.zipcode);
    // if(newInfo.address.geo.lat ? oldInfo.address.geo.lat = newInfo.address.geo.lat : oldInfo.address.geo.lat);
    // if(newInfo.address.geo.lng ? oldInfo.address.geo.lng = newInfo.address.geo.lng : oldInfo.address.geo.lng);
    if(newInfo.phone ? oldInfo.phone = newInfo.phone : oldInfo.phone);
    if(newInfo.website ? oldInfo.website = newInfo.website : oldInfo.website);
    // if(newInfo.company.name ? oldInfo.company.name = newInfo.company.name : oldInfo.company.name);
    // if(newInfo.company.catchPhrase ? oldInfo.company.catchPhrase = newInfo.company.catchPhrase : oldInfo.company.catchPhrase);
    // if(newInfo.company.bs ? oldInfo.company.bs = newInfo.company.bs : oldInfo.company.bs);
    console.log(oldInfo.address.street)
  } else {
    res.json({msg: `User with ID #${req.params.id} does not exist...`})
  }
  res.json(user)
};
// delete user
deleteUser = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  if(user !== undefined){
    const deletedUserIndex = users.indexOf(user);
    let deletedUser = users.splice(deletedUserIndex, 1)
    deletedUsersArr.push(deletedUser)
    res.json({
      Success: 'User has been deleted',
      Users: users,
      Deleted_Users: deletedUsersArr
    })
  } else {
    res.json({msg: `User with ID #${req.params.id} does not exist...`})
  }
};

module.exports = { listUser, showUser, createUser, updateUser, deleteUser };
