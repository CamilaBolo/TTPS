const Paciente = require("../models/Paciente");
const ErrException = require("./ErrException");

const readPaciente = async (id) =>
{
	const paciente = await Paciente.findById(id);
	if (!paciente)
	{
		throw new ErrException(404, "error! Paciente not found");
	}
	return paciente;
};

const createPaciente = async (pacienteBody) =>
{
	if (!pacienteBody.name || !pacienteBody.lastname || !pacienteBody.email)
	{
		throw new ErrException(404, "Error! Incomplete field");
	}
	const existPaciente = await Paciente.findOne({email: pacienteBody.email});
	if (existPaciente)
	{
		throw new ErrException(409, "Error! That email already exists");
	}
	const result = await Paciente.create(pacienteBody);
	if (!result)
	{
		throw new ErrException(500, "Couldn't create paciente");
	}
	return result;
};

const deletePaciente = async (id) =>
{
	const paciente = await readPaciente(id);
	if (!paciente)
	{
		throw new ErrException(404, "error! Paciente not found");
	}
	const result = await Paciente.findByIdAndDelete(id);
	if (!result)
	{
		throw new ErrException(500, "Couldn't delete paciente");
	}
	return result;
};

const updatePaciente = async (id, pacienteBody) =>
{
	const paciente = await readPaciente(id);
	if (!paciente)
	{
		throw new ErrException(404, "error! Paciente not found");
	}
	const result = await Paciente.findOneAndUpdate({_id: id}, {$set: pacienteBody});
	if (!result)
	{
		throw new ErrException(500, "Couldn't update paciente");
	}

	return result;
};

module.exports = {
	readPaciente,
	createPaciente,
	deletePaciente,
	updatePaciente,
};