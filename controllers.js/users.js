let users = require('../data/index')
let newUser = require('../data/sampleUser')

const listUser = (req, res) => {
    res.json(users);
}

const showUser = (req, res) => {
    let validId = users.some(x => x.id == req.params.id)

    if(validId){
        users.find(i => i.id == req.params.id)
    } else {
        res.status(404).json({msg: `User ${req.params.id} does not exist`})
    }
};

const createUser = (req, res) => {
    users.push(newUser)
    res.json(newUser)
}
