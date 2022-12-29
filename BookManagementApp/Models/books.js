var mongoose=require("mongoose")

const books=mongoose.Schema({
    bookName:String,
    bookAuthor:String,
    bookPrice:Number,
    bookGenre:String,
    bookAvailable:Boolean
})

module.exports = mongoose.module("Books",books);