const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

// Should retrieve the entire array from _data/index_
// GET /users Return all users
const listUsers = (req, res) => {
    res.json(users)
  };
 
// retrieve just the user that matches the passed-in id
// GET /users/:id Return just the user that matches the path param (id)
const showUser = (req, res) => {
    let found = users.findIndex(user => user.id == req.params.id);
    let user = users[found];
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found.")
    }
}
 
// Should add a user to the array
// POST /users Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

const createUser = (req, res) => {
    counter = users.length;
    const newUser = sampleUser;
    if (!newUser.name || !newUser.username){
        return res.status(400).json({msg: 'Include a name or username to continue.'});
    }
        users.push(newUser)
        res.json(users);
    }
 
//  Should update one user in the array based on its id
// PUT /users/:id Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
const updateUser = (req, res) => {
    const update = req.body;
    users.forEach(user => {
        if(user.id === parseInt(req.params.id)) {
            if(user.name != update.name){
                user.name = update.name
            } else {
                return user.name
            } 
        }
    })
    res.json(users)
}

// Should delete one user from the array based on its id
// DELETE /users/:id Delete one user by it's id
const deleteUser = (req, res) => {
    const found = users.some(user => user.id == req.params.id);
    if(found){
        res.json(
            {
                message: 'Deleted',
                users: users.filter(user => user.id !== parseInt(req.params.id))
            })
    } else{res.status(404).json({ msg: 'User not found'})
}
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser}