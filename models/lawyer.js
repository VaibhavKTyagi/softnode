var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var lawyerSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  secondName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: Number,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  altPhoneNumber: {
    type: Number
  },
  dateOfBirth: {
    type: String,
    required: false
  },
  aadharNumber: {
    type: Number,
    required: false
  },
  barID: {
    type: Number,
    required: false
  },
  speciality: {
    type: String
  },
  price: {
    type: Number
  }
});

var model = mongoose.model("Lawyer", lawyerSchema);
module.exports = model;
