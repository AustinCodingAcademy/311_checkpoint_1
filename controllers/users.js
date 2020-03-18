const users = require ('../data/index.js')

const defaultRoute = (req, res) => res.send('default route')

const getAllUsers = (req, res) => {
    res.json(users);
}

const getUserById = (req, res) => {
    const userId = req.params.id;
    res.json(users.find(user => user.id === Number(userId)))
}

const addUser = (req, res) => {
    const userId = users.length + 1;
    let user = {
        id: userId,
        ...req.body
        }
    users.push(user);
    res.json(users[users.length - 1])
}

const updateUser = (req, res) => {
    const userId = req.params.id;
    // const changeInfo = req.body;
    const found = users.find(user => user.id === Number(userId));
    users[userId -1] = {
        ...users[userId-1],
        ...req.body
    }
    res.json(users[Number(userId)-1]);
}

const deleteUserbyId = (req, res) => {
    let userId = req.params.id;
    users.splice(userId - 1, 1);
    console.log(`Deleting ${userId}`);
    res.send(users)
}

module.exports = {
    defaultRoute, getAllUsers, getUserById, addUser, updateUser, deleteUserbyId
}