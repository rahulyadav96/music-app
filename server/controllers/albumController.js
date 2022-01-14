const Album = require("../models/album.model");
const express = require("express");
const router = express.Router();

//access all albums

router.get("/",async(req,res)=>{
    try{
        const albums = await Album.find().lean().exec();
        res.status(200).json({albums})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//access a album

router.get("/:id", async(req,res)=>{

    try{

        const album = await Album.findById(req.params.id).lean().exec();
        res.status(200).json({album});

    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }

})

//add new album

router.post("/", async(req,res)=>{
    try{
        const album = await Album.create(req.body);
        return res.status(201).json({album})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//update a album Details

router.patch("/:id",async(req,res)=>{
    try{

        const album = await Album.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(201).json({album})

    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//delete a album
router.delete("/:id", async(req,res)=>{
    try{
        const album = await Album.findByIdAndDelete(req.params.id);
        res.status(200).json({album})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

module.exports  = router;