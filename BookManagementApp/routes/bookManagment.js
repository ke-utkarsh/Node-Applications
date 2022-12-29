const express = require("express");
const { builtinModules } = require("module");

const Books = require("../Models/books")
const Cust=require("../Models/customers")

const router=express.Router();

router.get("/books",async(req,res)=>{

    try{
        const books =await Books.find()
        console.log("Fetched")
        res.json(books)
    }catch(error){
        res.json(error)
    }
})

router.post("/addBook",async(req,res)=>{
    
})