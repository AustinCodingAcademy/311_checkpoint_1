const users = require("../data/index")
const newUser = require("../data/sampleUser")


const list = (req,res)=>{
  res.json(users)
}

const getOne = (req,res)=>{
  let stringId = req.params.userID
  let id = parseInt(stringId)
  for(let i = 0; i < users.length;i++){
    if(users[i].id === id){
      console.log(users[i].id)
      res.json(users[i])
    }
  }
}

const post = (req, res)=>{
  users.push(newUser)
  for(let i = 0; i < users.length;i++){
    users[i].id = i + 1
    console.log(users[i])
  }
  res.json(users)
}
module.exports = {list , getOne, post}