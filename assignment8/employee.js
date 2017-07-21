const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  employeeName: {type: String, required: true},
  employeeAddress: {type: String, required: true},
  reportingManagerId: {type: Schema.Types.ObjectId, ref: 'Employee'}
});

module.exports = mongoose.model('Employee', EmployeeSchema);
