const router = require("express").Router();
const {registerUser,loginUser,getAllUsers} = require("../controllers/user.controller")

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/details",getAllUsers)

module.exports = router;