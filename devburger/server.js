const express = require('express')

const app = express();
const PORT = 3000;
const path = require('path');

/*app.get('/', (req, res) => {
    res.send("Hello World!");
});*/

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});