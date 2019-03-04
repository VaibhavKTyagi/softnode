var express = require('express');
var router = express.Router()

var userModel = require("../models/user");

router.post('/',function(req,res,next){
    console.log(req.body);
    userModel.create({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email : req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        altPhoneNumber: req.body.altPhoneNumber,
        dateOfBirth: req.body.dateOfBirth,
        aadharNumber: req.body.aadharNumber
    },
    function(err){
        if(err)
        {
            console.log(err);
            return res.status(500).json({msg: "Could not create user"});
        }
        res.json({msg: "User Created"});
    });
console.log("res");});
module.exports = router;
