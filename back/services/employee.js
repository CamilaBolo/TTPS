const Employee = require("../models/Employee");

const readEmployee = async (id) => {
  const employee = await Employee.findById(id);
  if (!employee) throw new ErrException(404, "error! Employee not found");
  return employee;
};

const createEmployee = async (employeeBody) => {
  if (!employeeBody.username || !employeeBody.password || !employeeBody.name )
    throw new ErrException(404, "Error! Encomplete field");
  const existEmployee = await Employee.findOne({ username: employeeBody.username });
  if (existEmployee) throw new ErrException(409, "Error! That username already exists");
  const result = await Employee.create(employeeBody);
  if (!result) throw new ErrException(500, "Couldn't create employee");
  return result;
};

const deleteEmployee = async (id) => {
  const employee = await readEmployee(id);
  if (!employee) throw new ErrException(404, "error! Employee not found");
  const result = await Employee.findByIdAndDelete(id);
  if (!result) throw new ErrException(500, "Couldn't delete employee");
  return result;
};

const updateEmployee = async (id, employeeBody) => {
  const employee = await readEmployee(id);
  if (!employee) throw new ErrException(404, "error! Employee not found");
  const result = await Employee.findOneAndUpdate({ _id: id }, { $set: employeeBody });
  if (!result) throw new ErrException(500, "Couldn't update employee");

  return result;
};

module.exports = {
  readEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
