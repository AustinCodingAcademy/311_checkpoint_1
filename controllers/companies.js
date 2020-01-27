const companies = require('../data/companies');

exports.list = function list(req,res) {
  return res.json(companies);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let company = companies.find(arrObj => arrObj.id === usrID);

  console.log(company);
  res.json(company);    
};