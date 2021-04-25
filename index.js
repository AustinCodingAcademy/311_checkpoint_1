//** requirements */
const express = require('express') //import express 
const mysql = require('mysql') //import SQL
const bodyParser = require("body-parser"); //import body parser
const app = express() // initialize express into app variable 
const port = process.env.PORT || 3306 // streaming port 

//** middleware */
app.use(bodyParser.json()); 


//create connection to mysql database and initialize into pool variable to call later 
let pool = mysql.createPool({
  host: 'den1.mysql1.gear.host',
  user: 'jmdb11',
  password: 'Pi45wfTS4U!?',
  database:'jmdb11',
  connectionLimit: 200
})

// make actual connection to database. Check if error first and if none then log statement that were connected
pool.getConnection(function(err, connection) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});


// logic (code) for get, get by id, post, put, and delete requests for all routes. goes into controllers folder.  

function getUsers(req, res){
  pool.query('SELECT * FROM users', function(err, rows){
    if(err){
      console.log({ 'message': 'Error occured: Cannot fetch list of users ' + err })
      return res.status(404).send('User Data not found'); 
    }else{
      res.json(rows); 
    }
  })
}

function getUserById(req, res){ 
  let id = req.params.id
  let sql = `SELECT * FROM users WHERE id = ?` 
  let replacements = [id];  
  sql = mysql.format(sql, replacements); 

  pool.query(sql, function(err, rows){
    if(err){ 
      console.log( 'Internal Service Error ', err )
      res.status(500).send('Error'); 
    } else if(rows.length === 0) {
      console.log({ 'message': 'Error occured: Cannot fetch user with id ' + id + ' ' + err })
      res.status(404).send('User not found')
    } else if(rows.length > 1){
      console.log('Found too many users with id ' + id);
      res.status(500).send('Too many users found with this id')
    } else{
      res.json(rows[0]); 
    }
  })
}

function createNewUser(req, res){
  
  let newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }

  let sql = 'INSERT INTO users (first_name, last_name) VALUES (?, ?)'
  let replacements = [newUser.first_name, newUser.last_name]; 
  sql = mysql.format(sql, replacements); 

  pool.query(sql, function(err, rows){
    if(err){
      console.log('Internal Service Error ', err);
      res.status(500).send('Error occured'); 
    }else{
      res.json(newUser); 
    }
  })
}

function getComicBookCharacters(req, res){
  pool.query('SELECT * FROM comicbookcharacters', function(err, rows){
    if(err){
      console.log({ 'message': 'Error occured: Cannot fetch list of comic book characters' + err });
      return res.status(404).send('List of comic book heroes not found');
    }else{
      res.json(rows);
    }
  })
}

function getSuperheroById(req, res){ 
  let id = req.params.id
  let sql = `SELECT * FROM comicbookcharacters WHERE id = ?` 
  let replacements = [id];  
  sql = mysql.format(sql, replacements); 

  pool.query(sql, function(err, rows){
    if(err){ 
      console.log( 'Internal Service Error', err )
      res.status(500).send('Error'); 
    } else if(rows.length === 0) {
      console.log({ 'message': 'Error occured: Cannot fetch superhero with id ' + id + ' ' + err })
      res.status(404).send('Superhero not found')
    } else if(rows.length > 1){
      console.log('Found too many superheroes with id ' + id);
      res.status(500).send('Too many superheroes found with this id')
    } else{
      res.json(rows[0]); 
    }
  })
}

//create routes for default, users, and superHeroes (default route too) and do requests (get, put, post, del) here below. goes into routes folder

app.get('/', function(req, res){
  console.log('in the default route')
  res.send('default route'); 
})

app.get('/users', function(req, res){
  console.log('currently in the users path/route to retrieve list of users'); 
  getUsers(req, res);
  console.log('SUCCESS!')
}); 

app.get('/users/:id', function(req, res){
  console.log('currently in users path/route fetching user with requested id', req.params.id);
  getUserById(req, res); 
  console.log('SUCCESS!')
})

app.post('/users', function(req, res){
  console.log('currently in the users path/route creating a new user');
  createNewUser(req, res);
  console.log('SUCCESS!'); 
})

app.get('/superHeroes', function(req, res){
  console.log('currently in the superHeroes path retrieving comic book characters');
  getComicBookCharacters(req, res);
  console.log('SUCCESS!')
})

app.get('/superHeroes/:id', function(req, res){
  console.log('currently in superheroes path/route fetching superhero with requested id', req.params.id);
  getSuperheroById(req, res); 
  console.log('SUCCESS!')
})



//create listen request here 
app.listen(port, () => {
  console.log('app is listening on port:', port)
})