const estudioService = require("../services/estudio");

exports.readEstudio = async (req, res) =>
{
	try
	{
		const estudio = await estudioService.readEstudio(req.params.id);
		res.status(200).json(estudio);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.createEstudio = async (req, res) =>
{
	try
	{
		const estudio = await estudioService.createEstudio(req.body);
		res.status(201).json(estudio);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.deleteEstudio = async (req, res) =>
{
	try
	{
		const estudioDeleted = await estudioService.deleteEstudio(req.params.id);
		res.status(200).json(estudioDeleted);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.updateEstudio = async (req, res) =>
{
	try
	{
		const estudio = await estudioService.updateEstudio(req.params.id, req.body);
		res.status(200).json(estudio);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};