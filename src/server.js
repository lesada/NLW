//NOTAS:
// GET - Para pedir algo/requisitar
// POST - Salvar algo


const { AsyncLocalStorage } = require('async_hooks');
const { response } = require('express');
const express = require('express'); // importa a dependencia
const path = require('path');
const pages = require('./pages.js');



const server = express (); //inicia o express
server

// arquivos estaticos
.use(express.static('public'))

// template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// ROTAS

.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)




// startar o server

server.listen(5500);