const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SalaSchema=new Schema({
    name:{
        type:String,
        required:true 
    },
    capacity:{
        type:Number,
        required:true
    },
    column:{
        type:Number,
        required:true
    },
    row:{
        type:Number,
        required:true
    },
    disable:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model('Sala',SalaSchema)