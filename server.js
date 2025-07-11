const express = require('express')

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Bem-vindo ao servidor Express.js!");
});

app.post('/login', (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});