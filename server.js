require('dotenv').config();
const mongoose = require('mongoose');
const Entrante = require('./modelos/Entrante');
const Carnes = require('./modelos/Carnes');
const Pasta = require('./modelos/Pasta');
const Postres = require('./modelos/Postres');
const Bebidas = require('./modelos/Bebidas');
const Reservas = require('./modelos/reservas');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


app.use(express.json());

const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch(err => console.error('Error al conectar a la base de datos:', err));

app.get('/entrantes', async (req, res) => {
    try {
        const entrantes = await Entrante.find();
        res.json(entrantes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/entrantes/:id', async (req, res) => {
    try {
        const entrante = await Entrante.findById(req.params.id);
        if (!entrante) {
            return res.status(404).json({ message: 'Entrante no encontrado' });
        }
        res.json(entrante);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/carnes', async (req, res) => {
    try {
        const items = await Carnes.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/carnes/:id', async (req, res) => {
    try {
        const item = await Carnes.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/pasta', async (req, res) => {
    try {
        const items = await Pasta.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/pasta/:id', async (req, res) => {
    try {
        const item = await Pasta.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/postres', async (req, res) => {
    try {
        const items = await Postres.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/postres/:id', async (req, res) => {
    try {
        const item = await Postres.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/bebidas', async (req, res) => {
    try {
        const items = await Bebidas.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/bebidas/:id', async (req, res) => {
    try {
        const item = await Bebidas.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/reservas', async (req, res) => {
    try {
        const items = await Reservas.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/reservas/:id', async (req, res) => {
    try {
        const item = await Reservas.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva reserva
app.post('/crear-reserva', async (req, res) => {
    try {
        const reserva = new Reservas({
            nombre: req.body.nombre,
            fecha: req.body.fecha,
            hora: req.body.hora,
            ncomensales: req.body.ncomensales,
            estadoReserva: req.body.estadoReserva || 'pendiente',
        });

        const nuevaReserva = await reserva.save();

        res.status(201).json(nuevaReserva);
    } catch (err) {
        // Manejar errores
        res.status(400).json({ message: err.message });
    }
});

app.delete('/eliminar-reserva/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const reservaEliminada = await Reservas.findByIdAndDelete(id);

        if (!reservaEliminada) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }

        res.status(200).json({ message: 'Reserva eliminada con éxito' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
