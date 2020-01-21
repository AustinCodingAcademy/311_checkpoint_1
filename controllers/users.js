const users = require('../data/index');

const list = (request, response) => {
  console.log('heyoo');
  return response.json(users);
}

module.exports = { list }