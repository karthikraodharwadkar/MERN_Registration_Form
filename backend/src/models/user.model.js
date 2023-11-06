const mongoose = require("mongoose");
const validator = require("validator")

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate:(value)=>validator.isEmail(value)
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps:true
}
)

const User = mongoose.model("User",registerSchema)

module.exports = User;