const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const singerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    profileUrl:{type:String, required:false},
    songs:[{type:mongoose.Schema.Types.ObjectId, ref:"songs", required:false}],
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:8},
},{
  versionKey:false,
  timestamps:true
})

//is case of creating a new user or update a existing user
singerSchema.pre('save',function(next){
  if(!this.isModified('password')) return next();

  const hash = bcryptjs.hashSync(this.password,8);  //hash the password
  this.password = hash;

  return next();
})

singerSchema.methods.checkPassword = function(password){
  
  return bcryptjs.compareSync(password,this.password)
}



module.exports = mongoose.model('singer',singerSchema);