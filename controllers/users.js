const users = require('../data/index');
const sampleUser = require('../data/sampleUser')

/* listUsers
  * Should retrieve the entire array from _data/index_
  */

  const listUsers = (req, res) => {
    res.json(users)
  }

 /* showUser
  * Should retrieve just the user that matches the passed-in id*/
  
  const showUser = ((req, res) => {
    const found = users.some(user => user.id == req.params.id);
    if(found){
      res.send(users.filter(user => user.id == req.params.id))
    }else {
      res.status(400).json({msg: 'User not found'});
    }
  })

/* createUser
  * Should add a user to the array
  */

  const createUser = ((req, res) => {
    counter = users.length
    const newUser = sampleUser;
      if(!newUser.name || !newUser.username){
        return res.status(400).json({msg: 'Please include a name, and username'});
      }
      users.push(newUser)
      res.json(users);
    })
  

/* updateUser
  * Should update one user in the array based on its id
  */

 const updateUser = ((req, res) => {
    const updateUser = req.body;
    users.forEach(user => {
      if(user.id === parseInt(req.params.id)) {
          if(user.name != updateUser.name){//updateUser function decleration and declared as req.body?
            user.name = updateUser.name
          }else {
            return user.name
          }
        }
    })
    res.json(users)
 })

/* deleteUser
  * Should delete one user from the array based on its id
  */

 const deleteUser = ((req, res) => {
  const found = users.some(user => user.id == req.params.id);
  if(found){
    res.json(
      { 
        message: 'Deleted',
        users: users.filter(user => user.id !== parseInt(req.params.id))
      })
  }else{
    res.status(404).json({ msg: 'User not found'});
  }
  })

 module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }