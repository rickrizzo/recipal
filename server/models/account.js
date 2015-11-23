var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    //these are supposed to be arrays of strings
    //idk if this is the right syntax for that
    preferences: [String],
    restrictions: [String],
    schedule : {
    	0 : String,
    	1 : String,
    	2 : String,
    	3 : String,
    	4 : String,
    	5 : String,
    	6 : String
    }
	},
	{collection: 'users'}	
);



Account.register = function(Account){
	Account.save(function (err) {if (err) console.log('Error on save')});
}

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', Account);