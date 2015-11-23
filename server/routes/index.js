var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Account = require('../models/account.js');

router.get('/', function (req, res) {
    //res.render('index', { user : req.user });
    res.sendFile('index.html', {root : './'});
});

/*
router.get('/register', function(req, res) {
    res.render('register', {});
});*/

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
  console.log(req.params.username);
  Account.findOne({username: req.params.username},function(err, username){
    console.log(username);
    res.send(username);
  });
});

router.post('/preferences', function(req, res){
  
});

/*
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});*/
/*
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});*/


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

module.exports = router;