const users = require("../data/index")

let counter = users.length +1

const get = (req, res) => {
  res.json(users);
}

const getId = (req, res) => {
  let usersId = parseInt(req.params.userId)
  let usersIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < users.length; i++) {
    if (i + 1 === usersId)  {
      res.json(users[usersIndex])
    }   
  }
}

const post = (req, res) => {
  const sampleUser = {
    _id: counter,
    body: req.body.body,
    postId: req.body.postId
    }
    users.push(sampleUser); 
    counter = counter++
    console.log(req.body)
    res.json(sampleUser)
}


module.exports = { get, getId, post  }


