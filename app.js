const express = require('express')
const mongoose = require('./src/configs/db.config')
const app = express()

const routes = require('./src/routes/init');

// const routes = require('./src/routes/v1/users');

console.log(routes);

app.use(express.json());

app.use('/v1', routes); //to use the routes

app.listen(8080, () => {  console.log('Serveur lancé')})