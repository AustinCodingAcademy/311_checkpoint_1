const  userList  = require('../data/users')
let counter = userList.length +1


//GET method to get all users.
exports.userGetAll = (req, res) => {
    res.json(userList)
  }
  
  //GET method to get single user's information.
  
  exports.userGetSpecified = (req, res) => {
    userIdent = req.params.userId
    //Create a variable to determing if a userID is found.
    const found = userList.some(user => user.id === parseInt(userIdent));
    //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      res.json(userList.filter(user => user.id === parseInt(userIdent)));
    } else {
      res.status(400).json({msg: `User ${userIdent} not found`})
    }
  };
  //_________________________________________
  
  
  //POST Method
  exports.postUser = (req, res) => {
      const newUser = {
        id: counter,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
          street: req.body.street,
          suite: req.body.suite,
          city: req.body.city,
          zipcode: req.body.zipcode,
          geo: {
            lat: req.body.lat,
            lng: req.body.lng
            }
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
          name: req.body.name,
          catchphrase: req.body.catchphrase,
          bs: req.body.bs
        },
        isActive: req.body.isActive
      }
      userList.push(newUser)
      res.json(userList)
      counter = counter + 1
    console.log(userList)
    //console.log(usersList.length)
    //console.log('This is counterTool: ' + counter)
  }
  
  //PUT Method - update a user
  exports.putUser = (req, res) => {
    const found = userList.some(user =>user.id === parseInt(req.params.userId))
  
    if(found) {
      const upUser = req.body
        userList.forEach(user => {
          if(user.id === parseInt(req.params.userId)){
            user.id = upUser.id ? upUserid : user.id
            user.name = upUser.name ? upUser.name : user.name
            user.username = upUser.username ? upUser.username : user.username
            user.email = upUser.email ? upUser.email : user.email
            user.address = upUser.address ? upUser.address : user.address
            user.phone = upUser.phone ? upUser.phone : user.phone
            user.website = upUser.website ? upUser.website : user.website
            user.company = upUser.company ? upUser.company : user.company
            user.isActive = upUser.isActive ? upUser.isActive : user.isActive
            
            res.json ({msg: `The user ${req.params.userId} was updated.`})
          }
        }) 
    }else{
      res.status(400).json({msg: `No user with the id of ${req.params.userId}`})}
  }
  
  
  
  //DELETE Method
  exports.deletedUser = (req, res) => {
    //Create a variable to determing if a userID is found.
    const found = userList.some(user => user.id === parseInt(req.params.userId));
    userIndex = parseInt(req.params.userId);
    deletedUserIndex = userIndex -1;
  
    //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      userList[deletedUserIndex]["isActive"] = "false"
      res.send(`User ${userIndex} was successfully deleted`)
  
    //  res.json({ msg: `User ${req.params.id} deleted`, users: users.filter(user => user._id !== parseInt(req.params.id))});res.send("deleted")
    } else {
      res.status(400).json({msg: `User ${req.params.userId} not found`})
    }
    
    // console.log(deletedUserIndex)
    // console.log(userIndex)
    // console.log(users)
  }