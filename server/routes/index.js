var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    Account = require('../models/account.js');
var uri = 'mongodb://localhost:27017/recipals';
var db = require('mongoose').connect(uri);

router.get('/', function (req, res) {
    res.sendFile('index.html', {root : './'});
});

router.post('/register', function(req, res) {
    if(db.users.find(Account.username)){
      return res.status(500).json({err: "Could not register user"});
    }
    else{
      db.users.insert({"username" : Account.username, "password" : Account.password});
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'})
    });
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

module.exports = router;