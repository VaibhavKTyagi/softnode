var mongoose = require("mongoose");
bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: {
        type:String,
        required:false
    },
    secondName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        unique:true,
        required:false
    },
    password:{
        type:String,
        required:false
    },
    phoneNumber:{
        type:Number,
        required:false,
        unique:true
    },
    address:{
        type:String,
        required:false
    },
    altPhoneNumber:{
        type:Number,
        required:false
    },
    dateOfBirth:{
        type:String,
        required:false
    },
    aadharNumber:{
        type:Number,
        required:false,
        unique:false
    }
});
// userSchema.methods.comparePassword = function(password){
//     return bcrypt.comapreSync(password,this.password);
// }

var model = mongoose.model("User",userSchema);
module.exports = model;
