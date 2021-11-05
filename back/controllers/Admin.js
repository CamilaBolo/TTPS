const adminService = require("../services/admin");

exports.findAdmin = async (req, res) =>
{
	try
	{
		const admin = await adminService.findAdmin(req.body);
		res.status(200).json(admin);
	}
	catch (err)
	{
		res.status(err.status || 500).json({reason: err.message});
	}
};