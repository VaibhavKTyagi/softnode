var express = require("express");
var router = express.Router();

var lawyerModel = require("../models/lawyer");
router.post("/", function(req, res, next) {
  lawyerModel.create(
    {
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      altPhoneNumber: req.body.altPhoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      aadharNumber: req.body.aadharNumber,
      barID: req.body.barID,
      price: req.body.price,
      speciality: req.body.speciality
    },
    function(err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Could not create user" });
      }
      res.json({ msg: "User Created" });
    }
  );
});

module.exports = router;
