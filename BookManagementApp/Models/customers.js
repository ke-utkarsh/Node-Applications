var mongoose=require("mongoose")

const cust=mongoose.Schema({
    custName:String,
    booksBorrowed:Array
})

module.exports = mongoose.module("Customer",cust);