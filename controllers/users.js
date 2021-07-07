const users = require("../data/index.js")
const sample = require("../data/sampleUser.js")

const listUsers = (req, res) => {
  res.json(users)
  console.log("getting all")
};

const show = (req, res) => {
  console.log("Getting 1")
  const found = users.some(user => user.id === parseInt(req.params.id));

  if(found){
    res.json(users.filter(user => user.id === parseInt(req.params.id)));

  } else {
    res.status(400).json({msg: `no member with id of ${req.params.id}`})
  }

};
const create = (req, res) => {
  // console.log(users.slice(-1)[0].id)
  let newUser = sample
  newUser.id = (users.slice(-1)[0].id)+1
  users.push(newUser)
  res.send("Sample user added")
};

const update = (req, res) => {
  console.log("updating")
  const found = users.some(user => user.id === parseInt(req.params.id));

  if(found){
    users.forEach(user => {
      if(user.id === parseInt(req.params.id)){
        user.name = "Joe Blow"
        res.send(`User's name is now ${user.name}.`)
      }
    })

    users[i].name = "Joe Blow"
    res.send(`User's name is now ${users[i].name}.`)
    

  } else {
    res.status(400).json({msg: `no member with id of ${req.params.id}`})
  }
};
const deleteUser = (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if(found){
    users.forEach(user => {
      if(user.id === parseInt(req.params.id)){
        res.send(`User with is ${user.id} and name: ${user.name} has been deleted`)
        users.splice((user.id-1), 1)
      }
    })

    users[i].name = "Joe Blow"
    res.send(`User's name is now ${users[i].name}.`)
    

  } else {
    res.status(400).json({msg: `no member with id of ${req.params.id}`})
  }
};


module.exports = {
  listUsers,
  show,
  create,
  update,
  deleteUser
}