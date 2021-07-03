const users = require('../data/index')

// LIST -- GET /users
const list = (req, res) => {
 
  if(!users) {
    res.status(404).send({error:`Uh-oh! There don't appear to be any users here.`})
  } else {
    res.json(users)
  }

}

// LIST -- GET /users/active
const listActive = (req, res) => {
  let active = users.filter( user => user.isActive !== false )
 
  if(!active || active.length === 0) {
    res.status(404).send({error: `Uh-oh! There don't appear to be any active users.`})
  } else {
    res.json(active)
  }

}

// LIST -- GET /users/inactive
const listInactive = (req, res) => {
  let inactive = users.filter( user => user.isActive === false )
 
  if(!inactive || inactive.length === 0) {
    res.status(404).send({error: `Uh-oh! There don't appear to be any inactive users.`})
  } else {
    res.json(inactive)
  }

}

// SHOW -- GET /users/:id
const show = (req, res) => {
  let user = users.find( user => user.id == req.params.id)

  if (!user) {
    res.status(404).send({error: `User ${req.params.id} does not exist.`})
  } else {
    res.json(user)
  }

}

// CREATE -- POST /users
const create = (req, res) => {
  let newUser = req.body
  let newId = users.length + 1

  if (Object.keys(req.body).length === 0) {
    res.status(400).send({error: `User ${req.params.id} could not be updated. Body of request was null.`})

  } else {
    newUser.id = newId
    users.push(newUser)
    res.json(users)
  }

}

// UPDATE -- PUT /users/:id
const update = (req, res) => {
  let userId = users.find( user => user.id == req.params.id)
  let index = users.indexOf(userId);
  let user = users[index];
  
  if (!userId) {
    res.status(400).send({error: `User ${req.params.id} could not be updated. User does not exist.`})

  } else if (Object.keys(req.body).length === 0) {
    res.status(404).send({error: `User ${req.params.id} could not be updated. Body of request was null.`})

  } else {
    let updateUser = Object.assign(user, req.body);
    res.json(updateUser)
  }
  
}

// REMOVE -- DELETE /users/:id
const remove = (req, res) => {
  let user = users.find( user => user.id == req.params.id)

  if (!user) {
    res.status(400).send({error: `User ${req.params.id} could not be deleted. User does not exist.`})
  } else {
    user.isActive = false
    res.json(user)
  }

}

module.exports = { list, listActive, listInactive, show, create, update, remove }