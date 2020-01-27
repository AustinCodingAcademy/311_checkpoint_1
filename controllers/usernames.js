const usernames = require('../data/usernames');

exports.list = function list(req,res) {
  return res.json(usernames);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let usrName = usernames.find(arrObj => arrObj.id === usrID);

  console.log(usrName);
  res.json(usrName);    
};