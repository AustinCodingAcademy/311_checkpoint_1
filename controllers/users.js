const bodyParser = require("body-parser");
let users = require("../data/index.js");
let archivedUsers = [];




const generateId = () => {
    let highestId = 0;

    // loop through user array, find highest id
    users.forEach(user => {
        if (user.id > highestId) {
            highestId = user.id;
        }
    })

    // generate new id by adding 1 to the current highest id
    let newId = highestId + 1;

    return newId;
}


// =============== RETURN ALL USERS =============== //


const listUsers = (req, res) => {

    // return full users list
    return res.send(users);

};



// =============== RETURN USER BY ID =============== //


const showUser = (req, res) => {

    // save provided user id into variable
    let userId = parseInt(req.params.id);

    // find user based on id 
    let user = users.find(user => user.id == userId);

    // if user is found, return user data
    if (user) {
        return res.send(user);
    }
    // If user is not found, set 404 response status & send error message
    else {
        return res.status(404).send(`No user found with ID ${userId}`);
    }
};




// =============== CREATE NEW USER =============== //


const createUser = (req, res) => {

    // save provided new user info into variable
    let newUserRequest = req.body;
    let newUserDetails = Object.entries(newUserRequest);
    let newUser = {};

    // if NO information is provided, set error code & send message
    if (Object.keys(newUserRequest).length == 0) {
        return res.status(400).send("No information provided. No user created.");
    }

    // set up variables to track any invalid properties recieved in request body
    let propertyError = false;
    let invalidProperites = [];

    // generate new user ID
    newUser.id = generateId();

    // Set property values
    for (let i = 0; i < newUserDetails.length; i++) {
        let key = newUserDetails[i][0];
        let value = newUserDetails[i][1];

        // only create key/value pair if the key matches a valid key. Id is not a permitted user-defined key, to prevent duplicate values
        if (key == "name" || key == "username" || key == "email" || key == "phone" || key == "website" || key == "address" || key == "company" || key == "isArchived") {
            newUser[key] = value;
        }
        // track invalid property errors
        else {
            propertyError = true;
            invalidProperites.push(key);
        }
    }

    // push new user to users array
    users.push(newUser);

    // if there were NO invalid property names, send:
    if (!propertyError) {
        return res.send("User added: " + JSON.stringify(newUser));
    }
    // Otherwise, if there WERE any invalid property names, send:
    else {
        return res.send(`User has been added. Invalid properties rejected: ${invalidProperites}. New user: ${JSON.stringify(newUser)}`);
    }

};



// =============== UPDATE USER BY ID =============== //



const updateUser = (req, res) => {


    // save provided user id into variable
    let userId = parseInt(req.params.id);

    // save provided new user info into variable
    let update = req.body;
    let updates = Object.entries(update);

    // If NO information was provided, send status error and message
    if (updates.length == 0) {
        return res.status(400).send("No information provided. No user created.");
    }

    // find user and user's index based on id
    let user = users.find(user => user.id == userId);

    // check if user exists. If so:
    if (user) {
        // check for updates, and set new values
        for (let i = 0; i < updates.length; i++) {
            let key = updates[i][0];
            let value = updates[i][1];

            // only change value if the key matches an existing key. Id is not a permitted user-defined key, to prevent duplicate values
            if (key == "name" || key == "username" || key == "email" || key == "phone" || key == "website" || key == "address" || key == "company" || key == "isArchived") {
                user[key] = value;
            }
            else {
                res.json(`User updated. Rejected properties: ${key}.`);
            }
        }

        return res.send(`Updated user: ${user}`);
    }

    // If user is not found, set 404 response status & send error message
    else {
        return res.status(400).send(`No user found with ID ${userId}`);
    }

};




// =============== REMOVE (ARCHIVE) USER BY ID =============== //



const deleteUser = (req, res) => {

    // save provided user id into variable
    let userId = parseInt(req.params.id);

    // find user and user's index based on inputted id
    let user = users.find(user => user.id == userId);
    let userIndex = users.indexOf(user);

    // check if user is found
    if (user) {
        //flag user as archived
        user.isArchived = true;

        // add user to archivedUsers array
        archivedUsers.push(user);

        // remove user from users array
        users.splice(userIndex, 1);

        //alert user
        return res.send(`User ${userId} has been removed.`);
    }
    // set 404 response status & send error message
    else {
        return res.status(400).send(`No user found with ID ${userId}`);
    }

};



module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };