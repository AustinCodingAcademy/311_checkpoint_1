//import connection and mysql 
let pool = require('../sql/connection.js'); 
const mysql = require('mysql'); 

// logic (code) for get, get by id, post, put, and delete requests 

function getDefaultRoute(req, res){
  console.log('in the default route')
  res.send('default route');
}


function getComicBookCharacters(req, res){
  console.log('currently in superheroes path/route fetching all superheros');

  pool.query('SELECT * FROM comicbookcharacters', function(err, rows){
    if(err){
      console.log({ 'message': 'Error occured: Cannot fetch list of comic book characters' + err });
      return res.status(404).send('List of comic book heroes not found');
    }else{
      console.log('SUCCESS!'); 
      res.json(rows);
    }
  })
}
  
function getSuperheroById(req, res){ 
  let id = req.params.id
  console.log('currently in superheroes path/route fetching superhero with requested id', id);

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
      console.log('SUCCESS!'); 
    }
  })
}
  
function createNewSuperHero(req, res){
  console.log('currently in the superheroes path/route creating a new superhero');
    
  let newSuperHero = {
    realName: req.body.realName,
    intelligence: req.body.intelligence,
    strength: req.body.strength,
    alterEgo: req.body.alterEgo,
    occupation: req.body.occupation,
    birthPlace: req.body.birthPlace
  }
  
  let sql = 'INSERT INTO comicbookcharacters (realName, intelligence, strength, alterEgo, occupation, birthPlace) VALUES (?, ?, ?, ?, ?, ?)'
  let replacements = [newSuperHero.realName, newSuperHero.intelligence, newSuperHero.strength, newSuperHero.alterEgo, newSuperHero.occupation, newSuperHero.birthPlace]; 
  sql = mysql.format(sql, replacements); 
  
  pool.query(sql, function(err, rows){
    if(err){
      console.log('Internal Service Error ', err);
      res.status(500).send('Error occured'); 
    }else{
      res.json(newSuperHero); 
      console.log('SUCCESS!'); 
    }
  })
}
  
function updateSuperHero(req, res){
  let id = req.params.id;
  console.log('currently in the superHeroes route/path updating superHero with id', id);
  
  let updatedSuperHero = {
    id: req.params.id,
    realName: req.body.realName,
    intelligence: req.body.intelligence,
    strength: req.body.strength,
    alterEgo: req.body.alterEgo,
    occupation: req.body.occupation,
    birthPlace: req.body.birthPlace
  }
  
  let sql = 'UPDATE comicbookcharacters SET realName = ?, intelligence = ?, strength = ?, alterEgo = ?, occupation = ?, birthPlace = ? WHERE id = ?'
  let replacements = [updatedSuperHero.realName, updatedSuperHero.intelligence, updatedSuperHero.strength, updatedSuperHero.alterEgo, updatedSuperHero.occupation, updatedSuperHero.birthPlace, id]; 
  sql = mysql.format(sql, replacements); 
  
  pool.query(sql, function(err, rows){
    if(err){
      console.log('Internal Service Error ', err);
      res.status(500).send('Error occured'); 
    }else{
      res.json(updatedSuperHero);
      console.log('SUCCESS!');  
    }
  })
}
  
function deleteSuperHero(req, res){
  let id = req.params.id
  console.log('currently in the superheroes route/path deleting superHero with id', id);

  let sql = 'DELETE FROM comicbookcharacters WHERE id = ?'
  let replacements = [id]; 
  sql = mysql.format(sql, replacements); 
  
  pool.query(sql, function(err, rows){
    if(err){
      console.log('Internal Service Error ', err);
      res.status(500).send('Error occured');
    }else{
      res.send('Superhero ' + id + ' deleted'); 
      console.log('SUCCESS!'); 
    }
  })
}

module.exports = { getComicBookCharacters, getSuperheroById, createNewSuperHero, updateSuperHero, deleteSuperHero, getDefaultRoute}; 
  



