const users = require('../data/index')

const listUsers = (req, res) => {
    res.send(users)
  }

const showUser = (req, res) => {
    let getUser = users.find(user => user.id === parseInt(req.params.id))
    
    if(getUser){
      res.json(users.filter(user => user.id === parseInt(req.params.id)));
  
    } else {
      res.status(400).json({msg: `no member with id of ${req.params.id}`})
    }
  
}

const createUser = (req, res) => {
    let counter = users.length + 1
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        company: req.body.company 
    }
    newUser.id = counter 
    users.push(newUser)
    res.json(users)
}

const updateUser = (req, res) => {
    const found = users.find(user => user.id === parseInt(req.params.id))
    
    if (found) {
        const updUsers = req.body
        users.forEach(user => {
          if(user.id === parseInt(req.params.id)) {
            user.name = updUsers.name
  
            res.json({msg : 'Member Updated', user})
          }
        })
    } else {
      res.status(400).json({msg: `No member with that id of ${req.params.id}`})
    }
  }

  const deleteUser = (req, res) => {
    const found = users.find(user => user.id === parseInt(req.params.id))
  
    if (found) {
      res.json(users.filter(user => user.id !== parseInt(req.params.id)))
    } else {
      res.status(400).json({msg : `No member with the id of ${req.params.id}`})
    }
  }






  module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}