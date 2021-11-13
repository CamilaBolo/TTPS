const Mongoose = require("mongoose");

const User = new Mongoose.Schema({
    name: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
    role: {
		type: Number,
		required: true,
    }
});

module.exports = Mongoose.model("User", User);