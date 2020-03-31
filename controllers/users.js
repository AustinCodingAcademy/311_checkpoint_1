const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

const listUsers = (req, res) => {
    res.json(users);
}

const showUser = (req, res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found) {
        res.json(users.filter(users => users.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
}

const createUser = (req, res) => {
    req.body._id = users.length;
    req.body._id++;
    users.push(sampleUser);
    res.json(users);
}

const updateUser = (req, res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found) {
        const updUser = req.body;
        users.forEach(users => {
            if(users.id === parseInt(req.params.id)) {
                users.name = updUser.name ? updUser.name : users.name;
                users.email = updUser.email ? updUser.email : users.email;

                res.json({ msg: 'User updated', users });
            }
        })
    } else {
        res.status(400).json({ msg: 'User does not exist' });
    }
}

const deleteUser = (req, res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg : 'User deleted', users: users.filter(users => users.id !== parseInt(req.params.id))});
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };