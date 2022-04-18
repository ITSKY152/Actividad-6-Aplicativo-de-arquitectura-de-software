const express = require("express");
const bodyParser = require('body-parser');
const Notas = require('./notas');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/notas', (req, res) => {
    res.send(Notas);
})

app.post('/notas', (req, res) => {
    const nota = req.body;
    nota.id = Notas.length + 1;
    Notas.push(nota);
    res.send(nota);
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    { req.params.id }
    const nota = Notas.find(nota => nota.id == id);
    if (nota) res.send([nota]);
    else res.status(404).send({ mensagem: 'usuario no encontrado' });
})

app.put('/notas/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, descripcion, FechaInicio, FechaFin } = req.body;
    const nota = Notas.find(nota => nota.id == id);
    if (nota) {
        nota.titulo = titulo;
        nota.descripcion = descripcion;
        nota.FechaInicio = FechaInicio;
        nota.FechaFin = FechaFin;
        res.send(nota);
    } else res.status(404).send({ mensage: 'usuario no encontrado' });
})

app.delete('/notas/:id', (req, res) => {
    const id = req.params.id;
    const nota = Notas.find(nota => nota.id == id);
    if (nota) {
        Notas.splice(Notas.indexOf(nota), 1);
        res.status(200).send({ mensage: 'usuario eliminado' });
    } else res.status(404).send({ mensagem: 'usuario no encontrado' });
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
