var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Recipe = require('../models/recipe');

router.get('/', function(req, res){
	Recipe.find({},"name image", function(err, recipes){
		if(err) return console.error(err);
		console.log(recipes);
		res.send(recipes);
	});
});




module.exports = router;