const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
    title:{type:String, required:true},
    songs:[{type:mongoose.Schema.Types.ObjectId, ref:'songs', required:false}],
    cover_photo:{type:String, required:false}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("album",albumSchema)