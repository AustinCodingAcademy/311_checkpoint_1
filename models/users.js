const users = require("../data/index");

let nextId = 10;

  const userService = {
    getUsers: function(query) {
      if (query.name) {
        return users.filter(u => u.name === query.name);
      } else {
        return users;
      }
    },
    findById: function(id) {
      return users.find(c => c.id === id);
    },
    save: function(user) {
      if (user.id) {
        const oldUser = this.findById(user.id);
        const index = cars.indexOf(oldUser);
        users.splice(index, 1, user);
      } else {
        user.id = nextId++;
        users.push(user);
      }
    },
    destroy: function(id) {
      const oldUser = this.findById(id);
      const index = users.indexOf(oldUser);
      users.splice(index, 1);
    }
  };
  
  module.exports = userService;