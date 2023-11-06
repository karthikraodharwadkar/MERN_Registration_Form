const User = require("../models/user.model")

const postUserRegistration = async(data)=>{
    let result = await User.create({
        name:data.name,
        email:data.email,
        password:data.password
    })
    await result.save()
    return result
}

const verifyLoginUser = async(email,password)=>{
    let user = await User.findOne({email})
    return user
}

const getAllUsersList = async()=>{
    let data = await User.find({})
    return data
}

module.exports = {postUserRegistration,verifyLoginUser,getAllUsersList}