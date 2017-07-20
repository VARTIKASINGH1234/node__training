
const mongoose = require('mongoose');

const employee = require('./employee');

exports.addEmployee = function (req, res) {
  let emplo = new employee();
  emplo.employeeId = req.body.employeeId;
  emplo.employeeName = req.body.employeeName;
  emplo.employeeAddress = req.body.employeeAddress;
  emplo.reportingManagerId = req.body.reportingManagerId;
  emplo.save(function (error) {
    if (error) {
      res.send(error);
    }
    res.send({ message: 'Employee Created !' });
  });  
}
exports.getEmployee = function (req, res) {
  product.find(function (err, employees) {
    if (err) {
      res.send(err);
    }
    res.send(employees);
  });
}

exports.getEmployeeId = function (req, res) {
  product.findById(req.params.employeeId, function (err, emplo) {
    if (err)
      res.send(err);
    res.json(emplo);
  });
}

exports.updateEmployee = function (req, res) {
  product.findById(req.params.projectId, function (err, emplo) {
    if (err) {
      res.send(err);
    }
    p.employeeId = req.body.employeeId;
    p.reportingManagerId = req.body.reportingManagerId;
    project.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'Product updated!' });
    });
  });
}
