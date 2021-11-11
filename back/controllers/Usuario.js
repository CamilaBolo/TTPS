const usuarioService = require("../services/usuario");

exports.findUsuario = async (req, res) =>
{
	try
	{
		const admin = await adminService.findUsuario(req.body);
		res.status(200).json(admin);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.readUsuario = async (req, res) =>
{
	try
	{
		const usuario = await usuarioService.readUsuario(req.params.id);
		res.status(200).json(usuario);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.createUsuario = async (req, res) =>
{
	try
	{
		const usuario = await usuarioService.createUsuario(req.body);
		res.status(201).json(usuario);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.deleteUsuario = async (req, res) =>
{
	try
	{
		const usuarioDeleted = await usuarioService.deleteUsuario(req.params.id);
		res.status(200).json(usuarioDeleted);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.updateUsuario = async (req, res) =>
{
	try
	{
		const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
		res.status(200).json(usuario);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};