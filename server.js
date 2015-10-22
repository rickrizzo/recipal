var path = require('path');
var routes = require('./server/routes/index');
var bodyParser = require('body-parser');
var connect = require('connect');
var mongoConnect = require('./server/mongoConnect.js');


var db;
mongoConnect.connect().then(function() {
    //maybe some additional logic if need by when mongo connects
    db = mongoConnect.db;
});


var express = require('express'),
    port = 8005,
    app = express();


app.options("*", function (req, res) {
    console.log("OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "format, Accept, X-Requested-With, Origin, Content-Type ");
    res.end();
});

//app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, '/')));


app.use('/', routes);
/*
// catch 404 and forward to error handler
app.use(function (req, res, next) {
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

app.listen(port);
console.log('Server running on port ' + port + '.');