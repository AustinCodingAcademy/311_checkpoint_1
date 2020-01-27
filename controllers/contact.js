const contact = require('../data/contact');

exports.list = function list(req,res) {
  return res.json(contact);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let cont = contact.find(arrObj => arrObj.id === usrID);

  console.log(cont);
  res.json(cont);    
};