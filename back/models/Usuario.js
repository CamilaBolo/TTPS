const Mongoose = require("mongoose");

const Usuario = new Mongoose.Schema({
    name: {
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
    rol: {
        type: String,
		required: true,
    }
});

module.exports = Mongoose.model("Usuario", Usuario);