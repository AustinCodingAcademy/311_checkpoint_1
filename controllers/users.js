const usersService = require("../models/users");

exports.index = (req, res, next) => {
    const users = usersService.getUsers(req.query);
    res.status(200).json({users: users})
};
exports.createUser = (req,res, next) => {
    const user = req.body
    usersService.save(user);
    res.status(201).json({ message: "User added!"})
};
exports.showUser = ( req, res, next) => {
    const id = Number(req.params.id);
    const found = usersService.findById(id);
    if (!found) {
        const err = new Error("Not Found");
        err.status = 404;
        return next(err);
      }
      res.status(200).json({ user: found });
};

exports.updateUser = (req, res, next) => {
    const id = Number(req.params.id);
    const found = usersService.findById(id);
    if (!found) {
      const err = new Error("Not Found");
      err.status = 404;
      return next(err);
    }
    let user = req.body;
    user.id = id;
    usersService.save(user);
    res.status(200).json({ message: "User Updated!" });
  };
  
  exports.deleteUser = (req, res, next) => {
    const id = Number(req.params.id);
    const found = UsersService.findById(id);
  
    if (!found) {
      const err = new Error("Not Found");
      err.status = 404;
      return next(err);
    }
    UsersService.destroy(id);
    res.status(200).json({ message: "User Deleted!" });
  };
  