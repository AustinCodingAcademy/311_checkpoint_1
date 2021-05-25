
const express = require('express'); //import express 
const app = express() // initialize express into app variable 
const bodyParser = require("body-parser"); //import body parser  // streaming port 
const superHeroesRouter = require('./routes/superHeroes.js'); 
const usersRouter = require('./routes/users.js'); 
const customersRouter = require('./routes/customers.js');
const authRouter = require('./routes/auth.js'); 
const { logger } = require('./middleware/index.js')


//** middleware */; 
app.use(bodyParser.json());
app.use(logger); 
app.use(superHeroesRouter);
app.use(usersRouter);  
app.use(customersRouter); 
app.use(authRouter); 


 
app.get('/logtest', function(req, res){
  res.send('successes in log test funtion ');
})

function test(){
  document.getElementById('submitButton').addEventListener('click', function(){
    window.alert('success'); 
    console.log('worked')
    document.getElementById('outputTest').innerHTML = 'hello'
  })
}




//create listen request here 
const port = process.env.PORT || 3306;  // streaming port 
app.listen(port, () => {
  console.log('app is listening on port:', port); 
})


