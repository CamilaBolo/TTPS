const Mongoose = require("mongoose");

const Paciente = new Mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	birthdate: {
		type: Date,
		required: true
	},
	telefono: {
		type: String
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	resumen_historia_clinica: {
		type: String
	}
});

module.exports = Mongoose.model("Paciente", Paciente);