
const mongoose = require('mongoose');

const Employee = require('./employee');

exports.addEmployee = function (req, res) {
  let employee = new Employee();
  employee.employeeName = req.body.employeeName;
  employee.employeeAddress = req.body.employeeAddress;
  employee.reportingManagerId = req.body.reportingManagerId;
  employee.save(function (error) {
    if (error) {
      res.send(error);
    }
    res.send({"message": "employee is created"});
  });  
}
exports.getEmployee = function (req, res) {
  Employee.find({}, function (err, employees) {
    if (err) {
      res.send(err);
    }
    res.send(employees);
  });
}

exports.getEmployeeId = function (req, res) {
  Employee.findById(req.params.employeeId, function (err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
}

exports.updateEmployee = function (req, res) {
  Employee.findById(req.params.ObjectId, function (err, employee) {
    if (err) {
      res.send(err);
    }
    employee.employeeName = req.body.employeeName;
    employee.employeeAddress = req.body.employeeAddress;
    employee.reportingManagerId = req.body.reportingManagerId;
    employee.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'Product updated!' });
    });
  });
}
