const {listUsers} = require('../sampleUser/listUserss');
exports.listUsers = function listUsers (req,res) {
    res.json(listUsers)
}

exports.show = function show (req,res) {
    let comment = sampleUser.find(function(item){
        return item._id == req.params.id
    })
    res.json(sampleUser)
}

exports.create = function create (req,res) {
    let newInfo = sampleUser.length - 1;
    let previousId = comments[newInfo]._id;
    req.body._id = previousId + 1;
    sampleUser.push(req.body)
res.json(sampleUser)
}