
// Checkpoint #1 - ACA 311
// Justin Essler - 03/06/19


// import 3rd party
const express = require('express')
const bodyParser = require("body-parser");

// import 1st party
const usersRoutes = require("./routes/users");

// variables
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(bodyParser.json())
app.use(usersRoutes);

// Default Route
app.get('/', (req, res) => res.send('default route'))

// Listenting on port
app.listen(port, () => {
  console.log('app is listening on:', port)
})