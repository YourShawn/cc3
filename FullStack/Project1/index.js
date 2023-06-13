const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./modules/Employee.js");


const app = express();

app.use(express.json());
app.listen(5001,()=>{
  console.log("<<<<< Service is starting on 5001 port!");
});

//connection to mongodb
mongoose.connect(
  "mongodb+srv://Shawn0727:LdsrcHgXQjWq3Bjv@cluster0.ujd9xu3.mongodb.net/test",
  { useNewUrlParser: true }
);

app.use("*", (req, res, next) => {
  if (req.body) {
    console.log("<<<<< Request filter Body : ", req.body);
  }
  if (req.query) {
    console.log("<<<<< Request filter Query: ", req.query);
  }
  next();
});


app.get("/find/employee",async (req,res)=>{
  const result = await Employee.find({});
  res.json(result);
});

const employeeAdd = require("./Controllers/employeesAdd.js");
const employeesFindList = require("./Controllers/employeesFindList.js");

app.post("/add/employee", employeeAdd);


app.use((req,res)=>{res.render("404 Not Found")})
