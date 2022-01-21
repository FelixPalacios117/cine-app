const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FuncionesSchema = new Schema({
    horario: {
        type: String,
        required: true
    },
    idPelicula: {
        required:true,
        type: Schema.Types.ObjectId,
        ref: 'Pelicula',
    },
    idSala: {
        required:true,
        type: Schema.ObjectId,
        ref: 'Sala',
    }, 
    comprados:{
        type:String
    },
}, { timestamps: true })
module.exports = mongoose.model('Funciones', FuncionesSchema)