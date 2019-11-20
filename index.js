// Server Requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Routers
const usersRouter = require('./routes/users');

// Port
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(usersRouter);



app.listen(port, () => {
  console.log('app is listening on:', port)
}); 