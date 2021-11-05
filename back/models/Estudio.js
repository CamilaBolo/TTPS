const Mongoose = require("mongoose");

const Estudio = new Mongoose.Schema({
	paciente: {
		type: String
	},
});