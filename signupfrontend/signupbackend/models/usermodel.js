const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity")
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})

signUpTemplate.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    return token
}

const User = mongoose.model("user1",signUpTemplate)

const validate = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required().label("fullName"),
        username: Joi.string().required().label("username"),
        email: Joi.string().required().label("email"),
        password:passwordComplexity().required().label("password"),
    });
    return schema.validate(data)
};

module.exports = {User,validate};