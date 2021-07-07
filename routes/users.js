
// Users Routes File

const express = require("express")
const router = express.Router();
const usersController = require ("../controllers/users")

router.get ("/users", usersController.listUsers);
router.get ("/users/:id", usersController.showUser);
router.post ("/users", usersController.createUser);
router.put ("/users/:id", usersController.updateUser);
router.delete ("/users/:id", usersController.deleteUser);


module.exports = router;



// * Create the following routes inside `users.js`
// * Then move the function syntax to the  controllers file
// * comment-out the router.route when translated to the controllers file

// * GET /users
//   * Return all user
// router.get("/users", (req, res) => {
//     res.json(users);
// })

// * GET /users/:id
//   * Return just the user that matches the path param (id)
// router.get("/users/:id", (req, res) => {
//     let myid = req.params.userId
//     let foundUser = users.find(x => x._id == myid);
//     res.json(foundUser);
// })

// * POST /users
//   * Create a new user (sampleUser). 
//   * Find a way to increment the id so that we always insert the next available id in the list. 
//   * Currently we have users 1-10 (_data/index_). The next user should be 11
// router.post("/users/:id", (req, res) => {
//         let myid = req.params.userId
//         users[myid].name = "Johnny";
//         res.json(users[myid]);
//         res.send('success-jte')
// })


// * PUT /users/:id
//   * Update one user matching the path param (id). 
//   * You may again use the sampleUser code as your "body" for this request
// router.put("/users/:id", (req, res) => {
//     res.json(users);
// })



// * DELETE /users/:id
//   * Delete one user by it's id
// router.delete("/users/:id", (req, res) => {

// })

// You may chose to alter these routes so they appear as ('/', '/:id') in your users file,
// and then prefix them all with '/users' when we import them into index.. 
// but you are not required to do so.




