const _ = require("lodash");
const sampleUser = require("../data/sampleUser");
const users = require("../data/index");

let usersCount = users.length;

const findUsersIndexForId = (userId) => {
  // Get the index of the user in the users list ... will be -1 if a user doesn't exist with id given in the URL
  return users.findIndex((u) => u.id == userId);
}

const listUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id == userId);

  const isUserNotFound = !user;
  if (isUserNotFound) {
    res.status(404).send(`A user with id ${userId} was not found.`);
    return;
  }

  res.json(user);
};

const createUser = (req, res) => {
  // Increment the number of users since we're adding one. This means we can use usersCount as the new id of the
  // user since it's unique.
  usersCount++;

  // Generate the new user and update their id to be uniqiue amoungst all users
  const newUser = _.cloneDeep(sampleUser);
  newUser.id = usersCount;

  // Add the new user to the users list
  users.push(newUser);

  res.status(201).send(newUser);
};

const updateUser = (req, res) => {
  const userId = req.params.id;
    // Get the index of the user in the users list ... will be -1 if a user doesn't exist with id given in the URL
  const usersIndex = findUsersIndexForId(userId);


  const isUserNotFound = usersIndex === -1;

  if (isUserNotFound) {
    res.status(400).send(`A user with id ${userId} was not found.`);
    return;
  }

  // We want to enforce that the updated user has the same id as the user being replaced. Just set it...
  const updatedUser = req.body;
  updatedUser.id = userId;
  users[usersIndex] = updatedUser;
  res.json(updatedUser);
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  // Get the index of the user in the users list ... will be -1 if a user doesn't exist with id given in the URL
  const usersIndex = findUsersIndexForId(userId);


  const isUserNotFound = usersIndex === -1;
  if (isUserNotFound) {
    res.status(400).send(`A user with id ${userId} was not found.`);
    return;
  }

  // Capture (assign a variable to it) the user before we delete it so we can return it in the response.
  const userBeforeDelete = users[usersIndex];
  // Delete the user from the list
  users.splice(usersIndex, 1);

  res.json(userBeforeDelete);
};

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
