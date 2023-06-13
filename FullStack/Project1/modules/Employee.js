const mongoose =require( "mongoose")

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstname: {type:String,default:""},
  lastname: {type:String,default:""},
  dateOfJoining: {type:Date,default:new Date()},
  age: {type:Number,default:0},
  title:{type:String, required:true,default:""},
  department:{type:String, required:true,default:""},
  employeeType: {type:String, default:'employee'},
  currentStatus:{type:String,default:""}
});


const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;