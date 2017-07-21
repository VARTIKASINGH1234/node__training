
module.exports = function() {
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const mongoose = require('mongoose');
  const project = require('./project');
  const controllerProject = require('./controllerProject');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  const router = express.Router();
  router.route('/').post(controllerProject.addProject);
  router.route('/').get(controllerProject.getProject);
  router.route('/:projectId').get(controllerProject.getProjectId);
  router.route('/:projectId').put(controllerProject.updateProject);
  return router;
};