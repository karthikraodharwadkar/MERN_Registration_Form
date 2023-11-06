const {postUserRegistration,verifyLoginUser,getAllUsersList} = require('../services/user.service.js')

const registerUser = async (req, res) => {
  try {
    let registerNewUser = await postUserRegistration(req.body);
    res.status(201).json(registerNewUser);
  } catch (error) {
    res.status(401).json(error);
  }
};

const loginUser = async(req,res)=>{
    let loginUser = await verifyLoginUser(req.body.email,req.body.password)
    if(!loginUser || loginUser.password!==req.body.password){
        res.status(401).json({"message":"Invalid username or password"})
    }
    res.status(200).json(loginUser)
}

const getAllUsers = async(req,res)=>{
    try{
        let getUser = await getAllUsersList()
        res.status(200).json(getUser)
    }
    catch(error){
        res.status(400).json(error)
    }
    
}

module.exports = {registerUser,loginUser,getAllUsers};
