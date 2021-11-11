const Mongoose = require("mongoose");

const Estudio = new Mongoose.Schema({
	id_paciente: {
		type: String, 
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
	muestra: {
		cantidad: { type: Number },
		numero:   { type: Number }
	},
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
	historial_cambios: [
		{
			fecha_modificacion: { type: Date },
			estado: String
		}		
	],
});