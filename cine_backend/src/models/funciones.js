const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FuncionesSchema = new Schema({
    horario: {
        type: String,
        required: true
    },
    idPelicula: {
        type: Schema.ObjectId,
        ref: 'Pelicula',
    },
    idSala: {
        type: Schema.ObjectId,
        ref: 'Sala',
    },
}, { timestamps: true })
module.exports = mongoose.model('Funciones', FuncionesSchema)