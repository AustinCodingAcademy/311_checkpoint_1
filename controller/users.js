const users = require('../data/index');
const newUser = require('../data/sampleUser');
let newId = users.length;

const listUsers = (req, res) => {
    res.json(users)
}

const showUser = (req, res) => {
    let validID = users.some(i => i.id == req.params.id)
    if(validID) {
        res.json(users.filter(j => j.id == req.params.id))
    } else {
        res.status(404).json({msg: `User ${req.params.id} does not exist`})
    }
}

const createUser = (req, res) => {
    newUser.id = users.length +1
    users.push(newUser)
    res.json(newUser)
}


const updateUser = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found) {
        const updateThis = users.filter(user => user.id == req.params.id)
        updateThis[0].id = req.body.id
        updateThis[0].body = req.body.body;
        updateThis[0].postId = req.body.postId;
        updateThis[0].name = req.body.name
        const updateUser = {
            id: req.params.id,
            name: req.body.name,
            body: req.body.body,
            postId: req.body.postId
        }
        updateThis.push(updateUser)
        res.send(users)
    } else { res.status(404).json({msg : `User id ${req.params.id} not found`})}
}

const deleteUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(user !== undefined) { 
    users.splice(user, 1) 
    } else
    res.status(400).json({msg: `User ${req.params.id} doesn't exist`})
    return res.json(users)
}








module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };