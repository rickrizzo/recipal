var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Account = require('../models/account.js');
    Recipe = require('../models/recipe');
//var cookieParser = require('cookie-parser');

router.get('/', function (req, res) {
    res.sendFile('index.html', {root : './'});
});

router.post('/register', function(req, res) {
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err})
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'})
    });
  });
});

router.get('/preferences', function(req, res){
  Account.findOne({username: req.cookies.username}, 'preferences', function(err, preferences){
    res.send(preferences);
  })
  //console.log(req.cookies);
});

router.post('/preferences', function(req, res){
  Account.findOne({username: req.cookies.username}, 'preferences', function(err, preferences){
    console.log(preferences);
    preferences.preferences.push(req.body.preferenceName);
    Account.update({username: req.cookies.username},{'preferences': preferences.preferences}, function(err, doc){
      if(err) return res.status(500).json({err:err});
      res.status(200).json({status: 'Login successful!'});
    });
    
  });
});

router.get('/calendar', function(req, res){
  Account.findOne({username: req.cookies.username},function(err, username){
    console.log(username.schedule);
    res.send(username.schedule);
    
  });
});


router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).json({err: info})
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'})
      }
      res.status(200).json({status: 'Login successful!', username:user.username})
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({status: 'Bye!'})
});

router.post('/newRecipe', function(req, res){
  console.log(req.body);
  var rec = new Recipe({name: req.body.name, image: req.body.image, description: req.body.description, 
    cookTime: {hours: req.body.cookHour, min: req.body.cookMin}, prepTime: {hours: req.body.prepHour, min: req.body.prepMin}, recipeIngredients: req.body.ingredients,
    instructions: req.body.instructions, restrictions: req.body.restrictions});
  rec.save(function (err, data) {
      if (err) console.log(err);
      else console.log('Saved : ', data );
    });

  res.status(200).json({'Successful' : 'Event edited'})
});

module.exports = router;