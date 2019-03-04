var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

var userRoute = require("./user");
var lawyerRoute = require("./lawyer");
var caseRoute = require("./caselist");

var sign_in = function(req, res) {
  User.findOne(
    {
      email: req.email
    },
    function(err, user) {
      if (err) throw err;
      if (!user) {
        res
          .status(401)
          .json({ message: "Authentication failed. User not found." });
      } else if (user) {
        if (!user.comparePassword(req.password)) {
          res
            .status(401)
            .json({ message: "Authentication failed. Wrong password." });
        } else {
          return res.json({
            token: jwt.sign(
              { email: user.email, fullName: user.fullName, _id: user._id },
              "RESTFULAPIs"
            )
          });
        }
      }
    }
  );
};

var checkAdminToken = (req, res, next) => {
  const token = req.headers["token"];
  console.log("token", token);
  if (!token) {
    return res.status(403).json({
      message: "Access token missing",
      success: false
    });
  }
  jwt.verify(token, "RESTFULAPIs", (error, decoded) => {
    if (error) {
      return res.status(403).json({
        message: "Invalid Access Token",
        sucess: false
      });
    }
    req.user = decoded;

    console.log(req.user);
    next();
  });
};

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    msg: "Hello"
  });
});
router.use(checkAdminToken);
router.use("/user", userRoute);
router.use("/lawyer", lawyerRoute);
router.use("/caselist", caseRoute);

module.exports = router;
