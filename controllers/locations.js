const locations = require('../data/locations');

exports.list = function list(req,res) {
  return res.json(locations);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let location = locations.find(arrObj => arrObj.id === usrID);

  console.log(location);
  res.json(location);    
};