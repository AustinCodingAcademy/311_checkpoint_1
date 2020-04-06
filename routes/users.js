const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

// Routes for the controllers
router.get('/users', usersController.listUsers);

router.get('/users/:id', usersController.showUser);

router.post('/users', usersController.createUser);

router.put('/users/:id', usersController.updateUser);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;


// Old router functions

// router.get('/users', (req, res) => {
//     res.json(users)
// });

// router.get('/users/:id', (req, res) => {
//     const found = users.some(users => users.id === parseInt(req.params.id));

//     if(found) {
//         res.json(users.filter(users => users.id === parseInt(req.params.id)));
//     } else {
//         res.status(404).json({ msg: 'User not found' });
//     }
// });

// router.post('/users', (req, res) => {
//     req.body._id = users.length;
//     req.body._id++;
//     users.push(sampleUser);
//     res.json(users);
// });

// router.put('/users/:id', (req, res) => {
//     const found = users.some(users => users.id === parseInt(req.params.id));

//     if(found) {
//         const updUser = req.body;
//         users.forEach(users => {
//             if(users.id === parseInt(req.params.id)) {
//                 users.name = updUser.name ? updUser.name : users.name;
//                 users.email = updUser.email ? updUser.email : users.email;

//                 res.json({ msg: 'User updated', users });
//             }
//         })
//     } else {
//         res.status(400).json({ msg: 'User does not exist' });
//     }
// });

// router.delete('/users/:id', (req, res) => {
//     const found = users.some(users => users.id === parseInt(req.params.id));

//     if(found) {
//         res.json({ msg : 'User deleted', users: users.filter(users => users.id !== parseInt(req.params.id))});
//     } else {
//         res.status(404).json({ msg: 'User not found' });
//     }
// });

