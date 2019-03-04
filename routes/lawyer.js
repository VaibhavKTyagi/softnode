var express = require("express");
var router = express.Router();

var lawyerModel = require("../models/lawyer");

router.post("/getlist", function(req, res, next) {
  console.log("asd", req.body);
  //res.send("heb");

  lawyerModel.find(
    {
      $and: [
        { price: { $gte: req.body.lowerlimit } },
        { price: { $lte: req.body.upperlimit } }
      ],
      speciality: { $eq: req.body.speciality }
    },
    function(err, lawyer) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Could not create user" });
      }
      if (!lawyer) {
        return res.status(404).json({ msg: "could not find user" });
      }
      console.log("test");
      return res.json(lawyer);
    }
  );
});

module.exports = router;
