const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	username: {type: String, required: true, unique: true},
  favoriteRecipes: [
    {
      name: {type: String, required: true},
      link: String
    }
  ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);
