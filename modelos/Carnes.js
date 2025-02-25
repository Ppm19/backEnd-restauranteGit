const mongoose = require('mongoose');

const carnesSchema = new mongoose.Schema({
    foto: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
});

// Cambiar el nombre de la colección a 'carnes'
const Carnes = mongoose.model('carnes', carnesSchema);

module.exports = Carnes; 