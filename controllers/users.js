
const users= require('../data/index.js')
const sample= require('../data/sampleUser.js')

const getAllUsers = (req, res) => {

  res.json(users);
}

const getUserById = (req, res) => {
    // SELECT USERS WHERE ID = <REQ PARAMS ID>
    let idValue=req.params.id;
    let sql = users[idValue-1];

    if(sql){
      res.json(sql);
    } else {
      res.status(404).send("User not found.")
    }
}

const createUser = (req, res) => {
 
   var userId=users.length+1;
   let newUser=sample;
   
   if(!newUser.name || !newUser.username){
       return res.status(400).json({msg:'Include a name or username to continue'})
   } else{
       newUser.id=userId;
       users.push(newUser);
       res.json(users[newUser.id-1]);
    }
 
}
 

const updateUserById = (req, res) => {

  let idValue=req.params.id-1;
  let validUser=users[idValue];
   if(validUser){
     sample.id=JSON.parse(idValue+1);
     users[idValue]= sample;
     res.json(users[idValue]);
  } else{
    res.status(400).send("User not found.")
   }

}



const deleteUserById = (req, res) => {
  
  let userToDelete= req.params.id;
         
  if(userToDelete){
    users.splice(userToDelete-1,1);
    res.json(users);
  } else {
    res.status(400).send({error : "This user doesn't exist"});

  }

}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
}