const Usuario = require("../models/Usuario");
const ErrException = require("./ErrException");

const findUsuario = async ({username, password}) =>
{
	console.log(username);
	const usuario = await Usuario.findOne({username});
	if (!usuario)
	{
		throw new ErrException(404, "error! Admin not found");
	}
	else
	{
		if (!(usuario.password === password))
		{
			throw new ErrException(404, "error! Invalid password");
		}
		else
		{
			return usuario;
		}
	}
};

const readUsuario = async (id) =>
{
	const usuario = await Usuario.findById(id);
	if (!usuario)
	{
		throw new ErrException(404, "error! Usuario not found");
	}
	return usuario;
};

const createUsuario = async (usuarioBody) =>
{
	if (!usuarioBody.username || !usuarioBody.password || !usuarioBody.name)
	{
		throw new ErrException(404, "Error! Encomplete field");
	}
	const existUsuario = await Usuario.findOne({username: usuarioBody.username});
	if (existUsuario)
	{
		throw new ErrException(409, "Error! That username already exists");
	}
	const result = await Usuario.create(usuarioBody);
	if (!result)
	{
		throw new ErrException(500, "Couldn't create usuario");
	}
	return result;
};

const deleteUsuario = async (id) =>
{
	const usuario = await readUsuario(id);
	if (!usuario)
	{
		throw new ErrException(404, "error! Usuario not found");
	}
	const result = await Usuario.findByIdAndDelete(id);
	if (!result)
	{
		throw new ErrException(500, "Couldn't delete usuario");
	}
	return result;
};

const updateUsuario = async (id, usuarioBody) =>
{
	const usuario = await readUsuario(id);
	if (!usuario)
	{
		throw new ErrException(404, "error! Usuario not found");
	}
	const result = await Usuario.findOneAndUpdate({_id: id}, {$set: usuarioBody});
	if (!result)
	{
		throw new ErrException(500, "Couldn't update usuario");
	}

	return result;
};

module.exports = {
	readUsuario,
	createUsuario,
	deleteUsuario,
	updateUsuario,
    findUsuario
};