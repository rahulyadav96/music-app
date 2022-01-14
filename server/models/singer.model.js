const mongoose = require("mongoose");
const singerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    profileUrl:{type:String, required:false, unique:true},
    songs:[{type:mongoose.Schema.Types.ObjectId, ref:"songs", required:false}],
},{
  versionKey:false,
  timestamps:true
})
module.exports = mongoose.model('singer',singerSchema);