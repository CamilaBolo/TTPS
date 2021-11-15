const pacienteService = require("../services/paciente");

exports.getPacientes = async (req, res) =>
{
	try
	{
		const pacientes = await pacienteService.getPacientes();
		res.status(200).json(pacientes);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.readPaciente = async (req, res) =>
{
	try
	{
		const paciente = await pacienteService.readPaciente(req.params.id);
		res.status(200).json(paciente);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.createPaciente = async (req, res) =>
{
	try
	{
		const paciente = await pacienteService.createPaciente(req.body);
		res.status(201).json(paciente);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.deletePaciente = async (req, res) =>
{
	try
	{
		const pacienteDeleted = await pacienteService.deletePaciente(req.params.id);
		res.status(200).json(pacienteDeleted);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.updatePaciente = async (req, res) =>
{
	try
	{
		const paciente = await pacienteService.updatePaciente(req.params.id, req.body);
		res.status(200).json(paciente);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};