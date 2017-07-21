const mongoose = require('mongoose');

const Project = require('./project');

exports.addProject = function (req, res) {  
  let project = new Project();
  project.projectName = req.body.projectName;
  project.managerId = req.body.managerId;
  project.developerId = req.body.developerId;
  project.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.send({ message: 'Project Created !' })
  });
}
 
exports.getProject = function (req, res) {
  Project.find(function (err, projects) {
    if (err) {
      res.send(err);
    }
    res.send(projects);
  });
}
exports.getProjectId = function (req, res) {
  Project.findById(req.params.ObjectId, function (err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
}
exports.updateProject = function (req, res) {
  Project.findById(req.params.ObjectId, function (err, project) {
    if (err) {
      res.send(err);
    }
    project.projectName = req.body.projectName;
    project.managerId = req.body.managerId;
    project.developerId = req.body.developerId;
    project.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'Project updated!' });
    });
  });
}
