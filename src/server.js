const express = require("express");
const server = express();

server.listen(3000, () => {
    console.log('Rodando o servidor na porta 3000');
});

server.get('/', (request, response) => {
    return response.send('Teste!');
});

//Parei em 2h39m52