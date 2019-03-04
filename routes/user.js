var express = require('express');
var router = express.Router()

var userModel = require("../models/user");

router.get('/',function(req,res,next){
    userModel.findOne({
        email: req.user.email,
        password: req.user.password
    },function(err,user){
        if(err)
        {
            console.log(err);
            return res.status(500).json({msg: "Could not create user"});
        }
        if(!user)
        {
            return res.status(404).json({msg :"could not find user"});
        }
        res.json(user);
    }
    );
});



module.exports = router;
