const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
  projectName: {type: String, required: true},
  managerId: {type: Schema.Types.ObjectId, required: true, ref: 'Employee'},
  developerId: [{type: Schema.Types.ObjectId,  ref: 'Employee'}]
});

module.exports = mongoose.model('Project', ProjectSchema);