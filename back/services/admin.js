const Admin = require("../models/Admin");
const ErrException = require("./ErrException");

const findAdmin = async ({ username, password }) => {
  console.log(username);
  const admin = await Admin.findOne({ username });
  if (!admin) {
    throw new ErrException(404, "error! Admin not found");
  } else {
    if (!(admin.password === password)) {
      throw new ErrException(404, "error! Invalid password");
    } else return admin;
  }
};

module.exports = {
  findAdmin,
};
