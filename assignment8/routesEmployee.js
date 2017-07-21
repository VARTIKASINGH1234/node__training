
module.exports = function () {
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const mongoose = require('mongoose');
  const Employee = require('./employee');
  const controllerEmployee = require('./controllerEmployee');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  const router = express.Router();
  router.route('/').post(controllerEmployee.addEmployee);
  router.route('/').get(controllerEmployee.getEmployee);
  router.route('/:employeeId').get(controllerEmployee.getEmployeeId);
  router.route('/:employeeId').put(controllerEmployee.updateEmployee);
  return router;
};