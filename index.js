//** requirements */
const express = require('express') //import express 
const app = express() // initialize express into app variable 
const bodyParser = require("body-parser"); //import body parser
const port = 3306;  // streaming port 
const superHeroesRouter = require('./routes/superHeroes.js'); 
const usersRouter = require('./routes/users.js'); 
const customersRouter = require('./routes/customers.js');


//** middleware */
app.use(bodyParser.json()); 
app.use(superHeroesRouter);
app.use(usersRouter);  
app.use(customersRouter); 



//functions



//create listen request here 
app.listen(port, () => {
  console.log('app is listening on port:', port); 
})

