const express = require('express')
const app = express()
const sampleUser = require('../data/sampleUser')

// GET /users Return all users
app.get('/users', (req, res) => {
    res.json(users)
  })
 
// GET /users/:id Return just the user that matches the path param (id)
app.get('/users/:id', (req, res) => {
    let found = users.findIndex(user => user.id == req.params.id);
    let user = users[found];
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found.")
    }
}) 

app.get('/users/:id', (req, res) => {
    res.json(users.id)
})

// POST /users Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11
app.post('/users', (req, res) => {
    counter = users.length;
    const newUser = sampleUser;
    if (!newUser.name || !newUser.username){
        return res.status(400).json({msg: 'Include a name or username to continue.'});
    }
        users.push(newUser)
        res.json(users);
    }
)

// PUT /users/:id Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
app.put('/users', (req, res) => {
    const update = req.body;
    users.forEach(user => {
        if(user.id === parseInt(req.params.id)) {
            if(user.name != update.name){
                user.name = update.name
            } else {
                return user.name
            }
        }
    })
    res.json(users)
})

// DELETE /users/:id Delete one user by it's id
app.delete = ('/users', (req, res) => {
    const found = users.some(user => user.id === req.params.id);
    if(found){
        res.json(
            {
                message: 'Deleted',
                users: users.filter(user => user.id !== parseInt(req.params.id))
            })
    } else{res.status(404).json({ msg: 'User not found'}):
}
})