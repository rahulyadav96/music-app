const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
    title:{type:String, required:true},
    singers:[{type:mongoose.Schema.Types.ObjectId, ref:"singers", required:true}],
    poster:{type:String, required:false},
    duration:{type:Number,required:true},
    language:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model('song',songSchema);