var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String
	}	
);



Account.register = function(Account){
	Account.save(function (err) {if (err) console.log('Error on save')});
}

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', Account);