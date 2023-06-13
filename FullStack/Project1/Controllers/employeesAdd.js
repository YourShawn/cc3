const Employee = require("../modules/Employee");


module.exports = async (req, res) => {
  const employeeBean = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dateOfJoining: new Date(),
    age: req.body.age,
    title: req.body.title,
    department: req.body.department,
    employeeType: req.body.employeeType,
    currentStatus: 1,
  };

  const employeeInfo = new Employee(employeeBean);
  let result = await employeeInfo.save();
  console.log("<<<<< Request result: ", result);

  res.json(employeeInfo);
};