var express = require("express");
var router = express.Router();

var lawyer = require("../models/lawyer");
var user = require("../models/user");
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
router.post("/getSettings", function(req, res, next) {
  console.log("asd", req.body);
  //res.send("heb");

  lawyer.find(
    {
      email: req.user.email
    },
    function(err, casel) {
      if (!isEmpty(casel)) {
        casel[0]["password"] = "";

        return res.json(casel);
      }

      user.find(
        {
          email: req.user.email
        },
        function(err, caseu) {
          caseu[0]["password"] = "";

          if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Could not create user" });
          }
          if (!caseu) {
          }

          console.log("user", caseu);
          return res.json(caseu);
        }
      );
    }
  );
});
router.post("/updateLawyer", function(req, res, next) {
  console.log("update", req.body);
  //res.send("heb");
  lawyer.update(
    {
      email: req.user.email
    },
    {
      $set: {
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        altPhoneNumber: req.body.altPhoneNumber,
        price: req.body.price,
        speciality: req.body.speciality,
        available: req.body.available
      }
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

router.post("/updateUser", function(req, res, next) {
  console.log("asd", req.body);
  //res.send("heb");
  user.update(
    {
      email: req.user.email
    },
    {
      $set: {
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        altPhoneNumber: req.body.altPhoneNumber
      }
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
router.post("/updatepasswd", function(req, res, next) {
  console.log("asd", req.body.newpass);
  //res.send("heb");

  user.update(
    {
      email: req.user.email
    },
    { password: req.body.newpass },
    function(err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Could not create user" });
      }
      lawyer.update(
        {
          email: req.user.email
        },
        { password: req.body.newpass },
        function(err) {
          if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Could not create user" });
          }
          res.json({ msg: "Update Success" });
        }
      );
    }
  );
});

module.exports = router;
