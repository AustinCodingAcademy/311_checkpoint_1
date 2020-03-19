const users = require ('../data/index.js')

const defaultRoute = (req, res) => res.send('default route')

const getAllUsers = (req, res) => {
    res.json(users);
}

const getUserById = (req, res, next) => {
    const userId = req.params.id;
    res.json(users.find(user => user.id === Number(userId)))
    return next(new Error('400 User does not exist'))
}

const addUser = (req, res, next) => {
    const userId = users.length + 1;
    let user = {
        id: userId,
        ...req.body
        }
    users.push(user);
    res.json(users[users.length - 1])
    return next(new Error('Something went wrong!'))
}

const updateUser = (req, res, next) => {
    const userId = req.params.id;
    // const changeInfo = req.body;
    const found = users.find(user => user.id === Number(userId));
    users[userId -1] = {
        ...users[userId-1],
        ...req.body
    }
    res.json(users[Number(userId)-1]);
    return next(new Error('400 User does not exist'))
}

const deleteUserbyId = (req, res, next) => {
    let userId = req.params.id;
    users.splice(userId - 1, 1);
    console.log(`Deleting ${userId}`);
    res.send(users)
    return next(new Error('400 User does not exist'))
}



module.exports = {
    defaultRoute, getAllUsers, getUserById, addUser, updateUser, deleteUserbyId
}