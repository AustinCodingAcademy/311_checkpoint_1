//** requirements */
const express = require('express') //import express 
const app = express() // initialize express into app variable 
const bodyParser = require("body-parser"); //import body parser
const port = process.env.PORT || 3306 // streaming port 

//** middleware */
app.use(bodyParser.json()); 
app.use(require('./routes/users.js')); 
app.use(require('./routes/superHeroes.js'));  


//create listen request here 
app.listen(port, () => {
  console.log('app is listening on port:', port)
})