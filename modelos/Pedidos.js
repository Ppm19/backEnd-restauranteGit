const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    platos: { type: Array, required: true },
    precio: { type: Number, required: true },
    estadoReserva: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
});


const Pedidos = mongoose.model('pedidos', pedidosSchema);

module.exports = Pedidos; 