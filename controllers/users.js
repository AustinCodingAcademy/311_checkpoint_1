const users  = require('../data/index'); 
const sampleUser = require('../data/sampleUser');

//list users
exports.listUsers = (req, res) => res.json(users);

// show user by id
exports.showUser = (req, res) => {
  const found = users.some(user =>user.id === parseInt(req,params.id));
  if (found){
  res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(404).json({msg:`No users with the id of${req.params.id}`});
  }
};

//creat user (post)
exports.createUser = (req, res) =>{
  console.log('req body', req.body)
  console.log('sample user:', sampleUser)
  let userId = users[users.length - 1].id;
  let newUser = Object.assign({}, sampleUser);
  newUser.id = userId +=1;
  // const newUser = { 
  //  // id:,??
  //   name: req.body.name,
  //   username:req.body.username,
  //   email:req.body.email,
  //   address:req.body.address,
  //   street:req.body.street,
  //   suit:req.body.suit,
  //   city:req.body.city,
  //   zipcode:req.body.zipcode,
  //   geo:req.body.geo,
  //   lat:req.body.lat,
  //   lng:req.body.lng,
  //   phone:req.body.phone,
  //   website:req.body.website,
  //   company:req.body.company,
  //   name:req.body.name,
  //   catchPhrase:req.body.catchPhrase,
  //   bs:req.body.bs
  // }
  users.push(newUser);
  res.json(users);
};

//updateUser
exports.updateUser = (req, res) => {
  const found = users.some(user =>user.id === parseInt(req,params.id));
  if (found){
    const updUser =req.body;
    users.forEach(user =>{
      if(user.id===parseInt(req.params.id)) {
        user.name= updUser.name ? updUser.name : user.name;
        user.username= updUser.username ? updUser.username : user.username;
        user.email= updUser.email ? updUser.email : user.email;
        user.address= updUser.address ? updUser.address : user.address;
        user.street= updUser.street ? updUser.street : user.street;
        user.suit= updUser.suit ? updUser.suit : user.suit;
        user.city= updUser.city ? updUser.city : user.city;
        user.zipcode= updUser.zipcode ? updUser.zipcode: user.zipcode;
        user.geo= updUser.geo ? updUser.geo : user.geo;
        user.lat= updUser.lat ? updUser.lat : user.lat;
        user.lng= updUser.lng ? updUser.lng : user.lng;
        user.phone= updUser.phone ? updUser.phone : user.phone;
        user.website= updUser.website ? updUser.website : user.website;
        user.company= updUser.company ? updUser.company : user.company;
        user.name= updUser.name ? updUser.name : user.name;
        user.catchPhrase= updUser.catchPhrase ? updUser.catchPhrase : user.catchPhrase;
        user.bs= updUser.namebs ? updUser.bs : user.bs;

        req.json({msg:'user updated',user});
      }
    })
  res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg:`No users with the id of${req.params.id}`});
  }
};

//deleteUser
exports.deleteUser =  (req, res) => {
  const found = users.some(user =>user.id === parseInt(req,params.id));
  if (found){
  res.json({
    msg:'user deleted',
    users: users.filter(user => user.id !== parseInt(req.params.id))
  });
  } else {
    res.status(400).json({msg:`No users with the id of${req.params.id}`});
  }
};