var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//fields for each Account object
var Account = new Schema({
    username: String,
    password: String,
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


//function to register user
Account.register = function(Account){
	Account.save(function (err) {if (err) console.log('Error on save')});
}

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', Account);