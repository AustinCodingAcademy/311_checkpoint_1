const users = require('../data/index');
const sampleUser = require('../data/sampleUser')

const list = (req,res) => {
    if (!users.length) {
        // no users, throw error
        res.status(404).send('No users found')
     }
    res.json(users);
};

const show = (req,res) => {
    const user = users.find(user => user.id == req.params.id);
    if (!user) {
        // not user
        res.status(404).send('User not found')
      }
    
    res.json(user);
 };

const create = (req,res) => {
     users.push(sampleUser);
     res.json(sampleUser);
};

const update = (req,res) => {
    const user = users.find(user => user.id == req.params.id);
    if (!user) {
        // user not found
        res.status(404).send('User not found')
      }
    user.name = req.body.name;
    res.json(user);
}

const deleteUser = (req,res) => {
    const user = users.find(user => user.id == req.params.id);
    if (!user) {
        // user not found
        res.status(404).send('User not found')
      }
    const userIndex = users.indexOf(user)
    users.splice(userIndex, 1)
    res.json('User deleted')
}

module.exports = {
list,
show,
create,
update,
deleteUser
};

