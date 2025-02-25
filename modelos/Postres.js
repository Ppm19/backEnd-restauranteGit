const mongoose = require('mongoose');

const postresSchema = new mongoose.Schema({
    foto: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
});

const Postres = mongoose.model('Postres', postresSchema);

module.exports = Postres;