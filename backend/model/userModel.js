const { timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true,trim:true},
  email:{type:String,required:true,unique:true},
  passwordHash: { type: String, required: true }, // match controller
  profilePicture: { type: String, required: true, default:'../public/default.png'} // match controller
},{timeStamp:true});

module.exports = mongoose.model("User",userSchema);