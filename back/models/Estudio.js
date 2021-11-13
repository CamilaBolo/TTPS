const Mongoose = require("mongoose");

const Muestra = new Mongoose.Schema({
    cantidad: String,
    numero	: Number,
});

const Log = new Mongoose.Schema({
	fecha_modificacion: Date ,
	estado: String
});

const Estudio = new Mongoose.Schema({
	paciente: {
		type: Mongoose.Schema.Types.ObjectId, ref: 'Paciente',
		required: true
	},
	medico_derivante: {
		type: String,
		required: true
	},
	diagnostico_presuntivo: {
		type: String,
		required: true
	},
	tipo: {
		type: Number,
		required: true
	},
	presupuesto: {
		type: Number
	},
	turno: {
		type: String
	},
	muestra: Muestra,
	estado: {
		type: Number,
		required: true
	},
	empleado: {
		type: String
	},
	fecha_alta: {
		type: Date
	},
	historial_cambios: [Log],
});

module.exports = Mongoose.model("Estudio", Estudio);