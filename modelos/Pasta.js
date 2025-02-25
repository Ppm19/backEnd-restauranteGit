const mongoose = require('mongoose');

const pastaSchema = new mongoose.Schema({
    foto: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
});

// Cambiar el nombre de la colección a 'pasta'
const Pasta = mongoose.model('pasta', pastaSchema);

module.exports = Pasta; 