const User = require("../models/User");
const ErrException = require("./ErrException");

const findUser = async ({username, password}) =>
{
	const user = await User.findOne({username});

	if (!user)
	{
		throw new ErrException(404, "Error! User not found");
	}
	else
	{
		if (!(user.password === password))
		{
			throw new ErrException(404, "Error! Invalid password");
		}
		else
		{
			return user;
		}
	}
};

const readUser = async (id) =>
{
	const user = await User.findById(id);

	if (!user)
	{
		throw new ErrException(404, "Error! User not found");
	}

	return user;
};

const createUser = async (userBody) =>
{
	if (!userBody.username || !userBody.password || !userBody.name)
	{
		throw new ErrException(404, "Error! Incomplete fields");
	}

	const existUser = await User.findOne({username: userBody.username});

	if (existUser)
	{
		throw new ErrException(409, "Error! That username already exists");
	}

	const result = await User.create(userBody);

	if (!result)
	{
		throw new ErrException(500, "Error! Couldn't create user");
	}

	return result;
};

const deleteUser = async (id) =>
{
	const user = await readUser(id);

	if (!user)
	{
		throw new ErrException(404, "Error! User not found");
	}

	const result = await User.findByIdAndDelete(id);

	if (!result)
	{
		throw new ErrException(500, "Error! Couldn't delete user");
	}

	return result;
};

const updateUser = async (id, userBody) =>
{
	const user = await readUser(id);

	if (!user)
	{
		throw new ErrException(404, "Error! User not found");
	}

	const result = await User.findOneAndUpdate({_id: id}, {$set: userBody});

	if (!result)
	{
		throw new ErrException(500, "Error! Couldn't update user");
	}

	return result;
};

module.exports = {
	findUser,
	readUser,
	createUser,
	deleteUser,
	updateUser
};