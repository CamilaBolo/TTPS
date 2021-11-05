const employeeService = require("../services/employee");

exports.readEmployee = async (req, res) =>
{
	try
	{
		const employee = await employeeService.readEmployee(req.params.id);
		res.status(200).json(employee);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.createEmployee = async (req, res) =>
{
	try
	{
		const employee = await employeeService.createEmployee(req.body);
		res.status(201).json(employee);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.deleteEmployee = async (req, res) =>
{
	try
	{
		const employeeDeleted = await employeeService.deleteEmployee(req.params.id);
		res.status(200).json(employeeDeleted);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};

exports.updateEmployee = async (req, res) =>
{
	try
	{
		const employee = await employeeService.updateEmployee(req.params.id, req.body);
		res.status(200).json(employee);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};