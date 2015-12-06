//all included libraries
var path = require('path');
var routes = require('./server/routes/index');
var recipes = require('./server/routes/recipes');
var bodyParser = require('body-parser');
var connect = require('connect');
//var mongoConnect = require('./server/mongoConnect.js');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Mongo Database
var uri='mongodb://recipal:root@ds057214.mongolab.com:57214/recipal';
var db = require('mongoose').connect(uri);

//Express Setup
var express = require('express'),
    port = 8005,
    app = express();


//Access Control Options
app.options("*", function (req, res) {
    console.log("OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "format, Accept, X-Requested-With, Origin, Content-Type ");
    res.end();
});

//View Engine Setup
app.set('views', path.join(__dirname, 'views'));

//App Modules
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, '/')));

//Routes
app.use('/', routes);
app.use('/login', routes);
app.use('/recipes', recipes);
app.use('/newRecipes', recipes);




//Passport Configuration
var Account = require('./server/models/account.js');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/

//Application Port
app.listen(process.env.PORT || port);
console.log('Server running on port ' + port + '.');