const mongoose = require('mongoose');

const entranteSchema = new mongoose.Schema({
    foto: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
});

const Entrante = mongoose.model('Entrante', entranteSchema);

module.exports = Entrante;
