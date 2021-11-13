const userService = require("../services/user");

exports.findUser = async (req, res) =>
{
	try
	{
		const user = await userService.findUser(req.body);

		res.status(200).json(user);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.readUser = async (req, res) =>
{
	try
	{
		const user = await userService.readUser(req.params.id);

		res.status(200).json(user);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.createUser = async (req, res) =>
{
	try
	{
		const user = await userService.createUser(req.body);

		res.status(201).json(user);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.deleteUser = async (req, res) =>
{
	try
	{
		const userDeleted = await userService.deleteUser(req.params.id);

		res.status(200).json(userDeleted);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.updateUser = async (req, res) =>
{
	try
	{
		const user = await userService.updateUser(req.params.id, req.body);

		res.status(200).json(user);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};