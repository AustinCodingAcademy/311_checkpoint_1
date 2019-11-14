//instantiate express 
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const path = require('path');
const bodyParser = require("body-parser");
const controllers = require('./controllers/users')
const userRoutes = require('./routes/users')
app.use(bodyParser.json());
app.use(userRoutes)
//export this module so controller can access paths
//establish link to port 4000
app.listen(port, () => {
  console.log('app is listening on:', port)
})