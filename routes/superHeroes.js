//requirements 
const express = require("express");
const router = express.Router();
const superHeroesController = require('../controllers/superHeroes.js');


//all requests for superheroes route
router.get('/', superHeroesController.getDefaultRoute); 

router.get('/superHeroes', superHeroesController.getComicBookCharacters); 
  
router.get('/superHeroes/:id', superHeroesController.getSuperheroById); 
  
router.post('/superHeroes', superHeroesController.createNewSuperHero); 
  
router.put('/superHeroes/:id', superHeroesController.updateSuperHero); 
  
router.delete('/superHeroes/:id', superHeroesController.deleteSuperHero); 

//export router 
module.exports = router; 