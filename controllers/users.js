const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

// Retrieve all users
const listUsers = (req, res) => {
    res.json(users);
}

// Retrieve user that matches passed-in ID, and send error code if not found.
const showUser = (req, res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found) {
        res.json(users.filter(users => users.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
}

// Add user to the array
const createUser = (req, res) => {
    req.body._id = users.length;
    req.body._id++;
    users.push(sampleUser);
    res.json(users);
}

// Update user info based on ID, and send error code if it doesn't exist.
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

// Delete a user based on ID, and send error code if not found.
const deleteUser = (req, res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg : 'User deleted', users: users.filter(users => users.id !== parseInt(req.params.id))});
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };