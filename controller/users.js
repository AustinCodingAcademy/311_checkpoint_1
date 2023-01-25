const users  = require('../data/index');

module.exports = {
  listUser : (req, res) =>  res.json(users),
  showUser : (req, res) => {
                const findUser = users.find( user => user.id === parseInt(req.params.id));
                if(findUser) {
                  res.json(findUser);
                } else {
                  res.status(404).json( {msg : `No the id of ${req.params.id} is found!`})
                }
              },
  createUser : (req, res) => {
                 const addUser = {
                   ...req.body,
                   id: users[users.length - 1].id + 1
                 }
                 users.push(addUser);
                 res.json(addUser);
               },
  updateUser : (req, res) => {
                 const findUser = users.find( user => user.id = parseInt(req.params.id));
                 if(findUser) {
                   const update = {
                     ...req.body
                   }
                   res.json(update)
                 } else {
                   res.status(400).json( {msg : `No member with the id of ${req.params.id} is found!`})
                 }
               },
  deleteUser : (req, res) => {
                 const findUser = users.find( user => user.id = parseInt(req.params.id));
                 if(findUser) {
                   res.send('User deleted!')
                 } else {
                   res.status(400).json( {msg : `No member with the id of ${req.params.id} is found!`})
                 }
               }
}