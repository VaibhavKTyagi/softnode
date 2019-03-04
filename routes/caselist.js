var express = require("express");
var router = express.Router();

var caselist = require("../models/case");

router.post("/getlist", function(req, res, next) {
  console.log("asd", req.body);
  //res.send("heb");

  caselist.find(
    {
      $or: [{ userID: req.user.email }, { lawyerID: req.user.email }]
    },
    function(err, casel) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Could not create user" });
      }
      if (!casel) {
        return res.status(404).json({ msg: "could not find user" });
      }
      console.log("test");
      return res.json(casel);
    }
  );
});

router.post("/addCase", function(req, res, next) {
  console.log("console", req);
  caselist.create(
    {
      userID: req.user.email,
      lawyerID: req.body.lawyerID,
      caseDescription: req.body.caseDescription,
      caseName: req.body.caseName
    },
    function(err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Could not create user" });
      }
      res.json({ msg: "Case Filed" });
    }
  );
});

module.exports = router;
