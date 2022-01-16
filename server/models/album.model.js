const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
    title:{type:String, required:true},
    songs:[{type:mongoose.Schema.Types.ObjectId, ref:'song', required:false}],
    cover_photo:{type:String, required:false},
    genre:{type:String, required:true},
    year:{type:Number, required:true},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("album",albumSchema)