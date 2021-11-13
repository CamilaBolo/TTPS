const Estudio = require("../models/Estudio");
const ErrException = require("./ErrException");

const readEstudio = async (id) =>
{
	const estudio = await Estudio.findById(id)
        .populate('paciente', 'name -_id');;
	if (!estudio)
	{
		throw new ErrException(404, "error! Estudio not found");
	}
	return estudio;
};

const createEstudio = async (estudioBody) =>
{
	/* if (!estudioBody.name || !estudioBody.lastname || !estudioBody.email)
	{
		throw new ErrException(404, "Error! Incomplete field");
	}
	const existEstudio = await Estudio.findOne({email: estudioBody.email});
	if (existEstudio)
	{
		throw new ErrException(409, "Error! That email already exists");
	} */
	const result = await Estudio.create(estudioBody);
	if (!result)
	{
		throw new ErrException(500, "Couldn't create estudio");
	}
	return result;
};

const deleteEstudio = async (id) =>
{
	const estudio = await readEstudio(id);
	if (!estudio)
	{
		throw new ErrException(404, "error! Estudio not found");
	}
	const result = await Estudio.findByIdAndDelete(id);
	if (!result)
	{
		throw new ErrException(500, "Couldn't delete estudio");
	}
	return result;
};

const updateEstudio = async (id, estudioBody) =>
{
	const estudio = await readEstudio(id);
	if (!estudio)
	{
		throw new ErrException(404, "error! Estudio not found");
	}
	const result = await Estudio.findOneAndUpdate({_id: id}, {$set: estudioBody});
	if (!result)
	{
		throw new ErrException(500, "Couldn't update estudio");
	}

	return result;
};

module.exports = {
	readEstudio,
	createEstudio,
	deleteEstudio,
	updateEstudio,
};