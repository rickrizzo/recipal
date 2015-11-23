var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Recipe = require('../models/recipe');

//Serve Recipes
router.get('/', function(req, res){
	Recipe.find({},"name image", function(err, recipes){
		if(err) return console.error(err);
		console.log(recipes);
		res.send(recipes);
	});
});

//Serve Recipe Page
router.get('/:recipe', function(req, res){
	Recipe.findOne({name: req.params.recipe},function(err, recipe){
		res.send(recipe);
	});
});



module.exports = router;