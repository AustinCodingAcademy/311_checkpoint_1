let users = require('../data/index');
let newUser = require('../data/sampleUser')
let userCounter = users.length;

const list = (req, res) => {
    res.json(users);
}

const show = (req, res) => {
    let showId = users.find(x => x.id == req.params.id);
    if(showId) {
        res.json(showId);
    } else {
        res.status(400).send(`Users ${req.params.id} does not exist.`);
    }
}

const create = (req, res) => {
    users.push(newUser);
    res.json(newUser);
}

const update = (req, res) => {
    let userId = users.find(x => x.id == req.params.id)
    if(userId) {
        userId.id == userCounter++;
        res.json(userId);
    } else {
        res.status(400).send(`Users ${req.params.id} does not exist.`);
    }
}

const deleteUser = (req, res) => {
    let userId = users.find(x => x.id == req.params.id);
    if(userId) {
        userId.isActive = false;
        res.send(`${userId} has been deleted.`);
    } else {
        res.status(400).send(`Users ${req.params.id} does not exist.`);
    }
}

module.exports = {list, show, create, update, deleteUser};