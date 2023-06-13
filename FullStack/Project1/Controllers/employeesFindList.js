
const Employee = require("../modules/Employee");

module.exports = async (req, res) => {
  const result = await Employee.find({});
  
  console.log("<<<<< result : ", result);

  res.json(result);
};