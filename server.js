const express = require('express');
const mongoose = require('mongoose');
const Entrante = require('./modelos/Entrante');
const Carnes = require('./modelos/Carnes');
const Pasta = require('./modelos/Pasta');
const Postres = require('./modelos/Postres');
const Bebidas = require('./modelos/Bebidas');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://ppermis:hola123@backvercel.n3fru.mongodb.net/restauranteGit?retryWrites=true&w=majority&appName=backVercel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
