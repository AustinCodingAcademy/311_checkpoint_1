const express = require("express");
const router = express.Router();

//need to change this to correct file
const usersControllers = require("../controllers/users");

//get /users  and get function from usersControllers.listUsers
/*return all users*/
router.get("/users", usersControllers.listUsers);

/* GET /users/:id
Return just the user that matches 
the path param (id) */
router.get("/users/:id", usersControllers.showUser);

/* POST /users
Create a new user (sampleUser). Find 
a way to increment the id so that we 
always insert the next available id in 
the list. Currently we have users 1-10 
(_data/index_). The next 
user should be 11 */
router.post("/users", usersControllers.createUser);

/* PUT /users/:id
 Update one user matching the path param 
 (id). You may again use the sampleUser 
 code as your "body" for this request */
router.put("/users/:id", usersControllers.updateUser);

/* DELETE /users/:id
  Delete one user by it's id */
//delete code here

module.exports = router;
