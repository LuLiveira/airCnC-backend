//Express é um microframework dentro do node.
//Express vai ajudar a definir rotas.
const express = require('express');

//Importando as rotas.
//Necessario usar "./" para o Node não pensar que isto é um dependencia dentro do package.json
const routes = require('./routes');

// //Importando mongoose.
// const mongoose = require('mongoose');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.urlencoded({extended: false}));

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação, edição)

//Por padrão o Express não entende requisições JSON.

//Para o express entender JSON.
app.use(express.json());
app.use(routes); //Precisa vir depois de express.json para continuar entendendo json.


app.listen(PORT, HOST);

