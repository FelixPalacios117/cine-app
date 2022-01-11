const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PeliculaSchema=new Schema({
    name:{
        type:String,
        required:true 
    },
    duration:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    classification:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model('Pelicula',PeliculaSchema)