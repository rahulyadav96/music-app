const Song = require("../models/song.model");
const express = require("express");

const router = express.Router();

//access all songs

router.get("/",async(req,res)=>{
    try{
        const songs = await Song.find().lean().exec();
        res.status(200).json({songs})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//access a song

router.get("/:id", async(req,res)=>{

    try{

        const song = await Song.findById(req.params.id).lean().exec();
        res.status(200).json({song});

    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }

})

//add new song

router.post("/", async(req,res)=>{
    try{
        const song = await Song.create(req.body);
        return res.status(201).json({song})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//update a song Details

router.patch("/:id",async(req,res)=>{
    try{

        const song = await Song.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(201).json({song})

    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

//delete a song
router.delete("/:id", async(req,res)=>{
    try{
        const song = await Song.findByIdAndDelete(req.params.id);
        res.status(200).json({song})
    }catch(err){
        res.status(500).json({err:"Oops!, Somthing Wrong"})
        console.log(err)
    }
})

module.exports  = router;