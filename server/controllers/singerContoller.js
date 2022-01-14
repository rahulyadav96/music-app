const Singer = require("../models/singer.model")
const express = require("express");

const router = express.Router();

//access all singers

router.get("/",async(req,res)=>{
    try{
        const singers = await Singer.find().lean().exec();
        res.status(200).json({singers})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//access a singer

router.get("/:id", async(req,res)=>{

    try{

        const singer = await Singer.findById(req.params.id).lean().exec();
        res.status(200).json({singer});

    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }

})

//add new singer

router.post("/", async(req,res)=>{
    try{
        const singer = await Singer.create(req.body);
        return res.status(201).json({singer})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//update a singer Details

router.patch("/:id",async(req,res)=>{
    try{

        const singer = await Singer.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(201).json({singer})

    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//delete a singer
router.delete("/:id", async(req,res)=>{
    try{
        const singer = await Singer.findByIdAndDelete(req.params.id);
        res.status(200).json({singer})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

module.exports  = router;