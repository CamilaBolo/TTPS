const Mongoose = require("mongoose");

const MedicoDerivante = new Mongoose.Schema({
	mail:String,
    telefono: String,
    nombre: String,
    matricula: String
})

const ObraSocial = new Mongoose.Schema({
    nombre		: String,
    nro_afiliado: Number,
});

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
		type: MedicoDerivante,
		required: true
	},
	diagnostico_presuntivo: {
		type: String,
		required: true
	},
	detalle_diagnostico: {
		type: String,
		// required: true
	},
	obra_social: ObraSocial,
	tipo: {
		type: Number,
		// required: true,
		default: 0
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
		// required: true
		default: 0
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