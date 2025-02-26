const mongoose = require('mongoose');

const reservasSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    ncomensales: { type: Number, required: true },
    estadoReserva: { 
        type: String, 
        required: true,
        enum: ['pendiente', 'aceptada', 'rechazada'],
        default: 'pendiente' 
    },
});

const Reservas = mongoose.model('Reservas', reservasSchema);

module.exports = Reservas;