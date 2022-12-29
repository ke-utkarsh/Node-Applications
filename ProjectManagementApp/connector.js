const mysql = require("mysql")
require("dotenv").config() //importing .env

//console.log("Starting connection with db")

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE
    
})

//console.log(connection)

module.exports=connection