const express= require("express")
const app=express();
const PORT=8082;
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./router/registration.route")
//const DB_URI="mongodb+srv://admin:pa55word@cluster0.0p5r2bg.mongodb.net/users?retryWrites=true&w=majority";
const DB_URI = 'mongodb://127.0.0.1:27017/users'

app.use(express.json());

app.use(cors());

mongoose.connect(DB_URI).then(()=>{
    console.log("connected to MongoDB")
})

app.listen(PORT,()=>{
    console.log("server started")
})

app.use("/user",routes)
