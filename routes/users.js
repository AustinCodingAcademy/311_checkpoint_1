const express = require("express");
const router = express.Router();
const usersControl = require("../controllers/users")


router.get('/users', usersControl.listUsers)

router.get('/users/:id', usersControl.showUser)

router.post('/users', usersControl.createUser)

router.put('/users/:id', usersControl.updateUser)

router.delete('/users/:id', usersControl.deleteUser)



// router.get('/users', show)

// app.post('/users', (req, res) => {
//   let newUser = req.body;
//   user.push(newUser)
//   res.json(newUser)
// })

module.exports = router
// router.get('/users/:userID', )

// //showUser

// Should retrieve just the user that matches the passed-in id
// createUser

// Should add a user to the array
// updateUser

// Should update one user in the array based on its id
// deleteUser

// Should delete one user from the array based on its id