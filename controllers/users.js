const usersData = require("../data/sampleUser")

function listUsers(req,res) {
	res.json(usersData)
}

function showUsers(req,res){
   let foundUser = usersData.find(theUser => {
		 return theUser._id == req.params.id
	 })
	 res.json(foundUser)
}

function updateUsers(req,res){
  const them = users.some(user =>user._id == req.params.userId)
  
  if(them) {
  const findUser = req.body
  users.forEach(user => {
  if(user._id == req.params.userId){
  user._id = findUser._id ? findUser_id : user._id
  user.name = findUser.name ? findUser.name : user.name
  user.occupation = findUser.occupation ? findUser.occupation : user.occupation
  user.avatar = findUser.avatar ? findUser.avatar : user.avatar
  res.json (`${req.params.userId} was updated.`)
  }
  })
  }else{
  res.status(400).json(`${req.params.userId} is not a user`)}
  }

function createUsers(req,res){
	req.body._id = usersData.length+1
	usersData.push(req.body)
	res.json(usersData)
}

function deleteUsers(req,res){
  const found = users.some(user => user._id == req.params.userId);
  userIndex = parseInt(req.params.userId);
	deletedUserIndex = userIndex -1;
	if(found) {
		users[deletedUserIndex]["isActive"] = "false"
		res.send(`${userIndex} was successfully deleted`)
		
		} else {
		res.status(400).json(`${req.params.userId} not found`)
		}
}


module.exports = {listUsers, showUsers, updateUsers, createUsers, deleteUsers}