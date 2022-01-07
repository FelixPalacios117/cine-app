const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CustomerSchema=new Schema({
    name:{
        type:String,
        required:true 
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email",
        ],
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    type:{
        type:Number,
        required:true
    } 
},{timestamps:true})
module.exports=mongoose.model('Customer',CustomerSchema)