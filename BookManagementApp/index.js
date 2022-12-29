const express = require("express")  //express is a server like thingy
const bookRoute=require("./routes/bookManagment")   // routes is a controller like thingy
const bp = require("body-parser") //It is responsible for parsing the incoming request bodies in a middleware before you handle it.
require("dotenv").config()
const mongoose = require("mongoose")

const con = mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("Database Connected");
})

const server = express()

server.get("/",(req,res)=>{
    res.send("Recieved a hit on root url")
})

server.use("/books/",bookRoute)

server.use(bp.urlencoded({extended:false}))
server.use(bp.json())

const port = process.env.PORT;
//console.log(process.env.PORT);
server.listen(port,()=>{
    console.log("Server Started")
});


