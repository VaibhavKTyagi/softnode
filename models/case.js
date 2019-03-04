var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var caseSchema = new Schema({
  userID: {
    type: String,
    unique: false,
    required: true
  },
  lawyerID: {
    type: String,
    unique: false,
    required: true
  },
  caseDescription: {
    type: String,
    required: true
  },
  caseName: {
    type: String,
    required: true
  },
  convo: {
    type: [String],
    required: false
  }
});

var model = mongoose.model("Case", caseSchema);
module.exports = model;
