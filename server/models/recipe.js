var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Recipe = new Schema({
	name: String,
	image: String,
	description: String,
	cookTime: {
		hours: Number,
		min: Number
	},
	prepTime: {
		hours: Number,
		min: Number
	},
	recipeIngredients: [String],
	instructions: [String],
	restrictions: [String]
});

module.exports = mongoose.model('recipes', Recipe);