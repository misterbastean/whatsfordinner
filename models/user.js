const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const mealSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		link: String
	},
	{
		_id: false
	}
)

const userSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	username: {type: String, required: true, unique: true},
  favoriteMeals: [mealSchema]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);
