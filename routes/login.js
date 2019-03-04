var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
var lawyerModel = require("../models/lawyer");
var userModel = require("../models/user");

router.post("/", function(req, res, next) {
  console.log(req.body);
  lawyerModel.findOne(
    {
      email: req.body.email,
      password: req.body.password
    },
    function(err, lawyer) {
      console.log(lawyer);
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Could not create user" });
      }
      if (!lawyer) {
        //asdf
        userModel.findOne(
          {
            email: req.body.email,
            password: req.body.password
          },
          function(err, user) {
            console.log(user);
            if (err) {
              console.log(err);
              return res.status(500).json({ msg: "Could not create user" });
            }
            if (!user) {
              return res.status(404).json({ msg: "could not find user" });
            } else {
              return res.json({
                token: jwt.sign(
                  { email: user.email, fullName: user.fullName, _id: user._id },
                  "RESTFULAPIs"
                )
              });
            }

            // res.json(lawyer);
          }
        );
        //asds
      } else {
        return res.json({
          token: jwt.sign(
            { email: lawyer.email, fullName: lawyer.fullName, _id: lawyer._id },
            "RESTFULAPIs"
          )
        });
      }

      // res.json(lawyer);
    }
  );
});

module.exports = router;
