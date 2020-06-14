const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

const listUsers = (req, res) => res.json(users)

const showUser = (req, res) => {
  const found = users.find(user => user.id === +req.params.id)

  if (found) {
    res.json(users.find(user => {
      return +req.params.id === user.id 
    }))
  }
  else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
}

const createUser = (req, res) => {
  let newID = users.length +1

  const newUser = {
    id: newID,
    name: sampleUser.name,
    username: sampleUser.username,
    email: sampleUser.email,
    address: {
      street: sampleUser.address.street,
      suite: sampleUser.address.suite,
      city: sampleUser.address.city,
      zipcode: sampleUser.address.zipcode,
      geo: {
        lat: sampleUser.address.geo.lat,
        lng: sampleUser.address.geo.lng
      }
    },
    phone: sampleUser.phone,
    website: sampleUser.website,
    company: {
      name: sampleUser.company.name,
      catchPhrase: sampleUser.company.catchPhrase,
      bs: sampleUser.company.bs
    }
  }

  users.push(newUser)
  res.json(users)
}


const updateUser = (req, res) => {
  const found = users.find(user => user.id === +req.params.id)

  if (found) {
    users.forEach(user => {
      if(user.id === +req.params.id) {
        user.name = req.body.name 
        res.json({ msg: 'User name updated', user })
      }
    })
  }
  else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
}


const deleteUser = (req, res) => {
  for (let i=0; i<users.length; i++) {
    if (users[i].id === +req.params.id) {
      users[i].isActive = "False"
      res.send('deleted')
    }
    else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
  } 
}


module.exports = {
  listUsers,
  showUser,
  createUser, 
  updateUser, 
  deleteUser
}