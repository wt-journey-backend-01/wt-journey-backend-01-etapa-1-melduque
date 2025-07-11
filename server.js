const express = require('express')

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Bem-vindo ao servidor Express.js!");
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

app.get('/sugestao', (req, res) => {
    res.status(200).send(`<h1>Sugestão recebida!</h1><p>Nome: ${req.query.nome}</p><p>Ingredientes: ${req.query.ingredientes}</p>`);
});

app.get('/api/lanches', (req, res) => {
    const lanches = [
        { id: 1, nome: 'Hambúrguer', ingredientes: 'Carne, queijo, pão' },
        { id: 2, nome: 'Pizza', ingredientes: 'Queijo, molho de tomate, massa' },
        { id: 3, nome: 'Salada', ingredientes: 'Alface, tomate, cenoura' }
    ];
    res.status(200).json(lanches);
});