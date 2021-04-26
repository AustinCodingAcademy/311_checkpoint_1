
//import connection and mysql 
const pool = require('../sql/connection.js'); 
const mysql = require('mysql'); 

// logic (code) for get, get by id, post, put, and delete requests 

function getDefaultRoute(req, res){
    console.log('in the default route')
    res.send('default route');
}

function getUsers(req, res){
    console.log('currently in the users path/route retrieving list of users'); 
    
    pool.query('SELECT * FROM users', function(err, rows){
      if(err){
        console.log({ 'message': 'Error occured: Cannot fetch list of users ' + err })
        return res.status(404).send('User Data not found'); 
      }else{
        res.json(rows); 
        console.log('SUCCESS!');
      }
    })
}
  
function getUserById(req, res){ 
    let id = req.params.id;
    console.log('currently in the users path/route fetching user with id', id);

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
        console.log('SUCCESS!')
      }
    })
}
  
function createNewUser(req, res){
    console.log('currently in the users path/route creating a new user');
    
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
        console.log('SUCCESS!'); 
        res.send(newUser); 
      }
    })
}
  
function updateUser(req, res){
    let id = req.params.id; 
    console.log('currently in the users route/path updating user with id', req.params.id);
  
    let updatedUser = {
      id: req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }
  
    let sql = 'UPDATE users SET first_name = ?, last_name = ? WHERE id = ?'
    let replacements = [updatedUser.first_name, updatedUser.last_name, id]; 
    sql = mysql.format(sql, replacements); 
  
    pool.query(sql, function(err, rows){
      if(err){
        console.log('Internal Service Error ', err);
        res.status(500).send('Error occured'); 
      }else{
        console.log('SUCCESS!'); 
        res.json(updatedUser); 
      }
    })
}
  
function deleteUser(req, res){
    let id = req.params.id
    console.log('currently in the users route/path deleting user with id', id);

    let sql = 'DELETE FROM users WHERE id = ?'
    let replacements = [id]; 
    sql = mysql.format(sql, replacements); 
  
    pool.query(sql, function(err, rows){
      if(err){
        console.log('Internal Service Error ', err);
        res.status(500).send('Error occured');
      }else{
        console.log('SUCCESS!'); 
        res.send('User ' + id + ' deleted'); 
      }
    })
}

module.exports = { getUsers, getUserById, createNewUser, updateUser, deleteUser, getDefaultRoute}; 