//create link with database
const users = require('../data/index')
const sampleUser = require('../data/sampleUser')
//return all users
listUsers = (req, res) => {
    res.json(users);
}
//show user by id
showUser = (req, res) => {
    try{
    const user = users.find(function (user) {
        if (user.id === Number(req.params.id))
            console.log(user.id)     
    })
    res.sendStatus(200);
} catch(err) {
  res.status(400).json({ userFindError: err });
}}


//update a new user
const updateUser = (req, res) => {
    if (validId){
        let user = users.find(i => i.id == req.params.id)
        
        res.json(user)
   
    }
}
createUser = (req, res) => {
const lastIndex = [users.length -1]
const lastUser = users[lastIndex]
const lastUserId = ++lastUser.id
const newUser = {
        name: req.body.name,
        id: lastUserId,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    } 
    users.push(newUser)
    console.log(req.params.id)
    console.log(req.params.athing)
    console.log(lastUserId)
    res.json(users);
}
//update user
// updateUser = (req, res) => {
//     const user = users.find(function (user) {
//         if (user.id === Number(req.params.id)) {
          
//         }
//         res.json({ message: "user updated", user })
//     })
//     console.log(user)
// }
// deleteUser = (req, res) => {
//     const user = users.find(function (user) {
//         if (user.id === Number(req.params.id)) {
//             userToDelete = users.findIndex(users => users === user.id)
//             if(userToDelete !== false){
//                 user = userToDelete
//             }
//         }
//         res.json({ message: "user removed", users })
//     })
//         console.log(userToDelete)
// }

module.exports = { listUsers, showUser, updateUser, createUser, deleteUser }