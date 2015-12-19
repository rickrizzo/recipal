var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Recipe = require('../models/recipe');

//Serve Recipes
router.get('/', function(req, res){
	console.log(req.query);
	Recipe.find({},"name image",{limit:9, skip:(Number(req.query.pageNumber) - 1) * 9}, function(err, recipes){
		if(err) return console.error(err);
		console.log(recipes);
		res.send(recipes);
	});
});
router.get('/pageCount',function(req, res){
	Recipe.count({}, function(err, c){
		res.send({'pageCount': c});
	});
});

//Serve Recipe Page
router.get('/:recipe', function(req, res){
	Recipe.findOne({name: req.params.recipe},function(err, recipe){
		res.send(recipe);
	});
});



module.exports = router;