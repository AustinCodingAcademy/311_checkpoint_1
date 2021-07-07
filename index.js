const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000
const usersRouter = require('./routes/users.js');

app.get('/', (req, res) => res.send('default route'))

app.use(function(err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});

app.use(bodyParser.json());
app.use(usersRouter)

app.listen(port, () => {
  console.log('app is listening on:', port)
})