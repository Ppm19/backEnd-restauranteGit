const mongoose = require('mongoose');

const bebidasSchema = new mongoose.Schema({
    foto: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
});

const Bebidas = mongoose.model('Bebidas', bebidasSchema);

module.exports = Bebidas;
