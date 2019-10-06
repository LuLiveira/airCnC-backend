//Express é um microframework dentro do node.
//Express vai ajudar a definir rotas.
const express = require('express');

//Importando as rotas.
//Necessario usar "./" para o Node não pensar que isto é um dependencia dentro do package.json
const routes = require('./routes');

const cors = require('cors');

const path = require('path');

const socketio = require('socket.io');
const http = require('http');

// //Importando mongoose.
// const mongoose = require('mongoose');

const app = express();
//Extraindo o app do express.
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('Usuario contectado', socket.id);
});

app.use(express.urlencoded({extended: false}));

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());

//Por padrão o Express não entende requisições JSON.

//Para o express entender JSON.
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes); //Precisa vir depois de express.json para continuar entendendo json.


server.listen(process.env.PORT || 3333);

